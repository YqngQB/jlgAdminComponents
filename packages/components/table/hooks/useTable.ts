import { cloneDeep } from 'lodash-unified'
import { ref, nextTick } from 'vue'

import type { Ref } from 'vue'
import type {
	JlgTableProps,
	EmitsOptions,
	JlgColumnProps
} from '../../../types'
import {
	VxeTableConstructor,
	VxeTableDefines,
	VxeTablePrivateMethods,
	VxeGridConstructor,
	VxeTablePropTypes
} from 'vxe-table'
/**
 * @param {JlgTableProps} props 组件配置项
 * @param {EmitsOptions} emit 事件
 * @param {Ref} xTable 表格实例
 * @param state 组件状态
 * @param listInfo 列表相关配置
 * */
export function useTable(
	props: JlgTableProps,
	emit: EmitsOptions,
	xTable: Ref,
	state: Record<string, any>,
	listInfo: Record<string, any>,
	sortList: Ref<VxeTableDefines.SortCheckedParams[]>
) {
	let tableQuery = ref(cloneDeep(props.query))

	/**
	 * 表格重新加载方法
	 * @param [boolean] boolean 如果参数为 true, 则强制刷新到第一页
	 * @param [boolean] isClear 重新加载数据前，是否清空之前的选中项
	 * @param isClear 重新加载数据前，是否清空之前的选中项
	 */
	function refresh(boolean = false, isClear = !props.isCheckBox) {
		if (!props.api) return
		if (props.isPagination && boolean) {
			listInfo.query.pageIndex = 1
		}

		if (isClear) {
			clearSelections()
		}

		getList(props.api).then((r) => r)
	}
	/**
	 * 清空用户的选择
	 * */
	function clearSelections() {
		if (!xTable.value) return
		if (props.isCheckBox) {
			xTable.value.clearCheckboxRow()
			xTable.value.clearCheckboxReserve()
		} else {
			xTable.value.clearRadioRow()
		}
		state.selection = props.isCheckBox ? [] : null
	}

	/**
	 * 处理参数
	 */
	function handleParams() {
		const obj = {
			sumColumns: [] as string[]
		}
		for (let key in tableQuery.value) {
			if (tableQuery.value[key] || tableQuery.value[key] === 0) {
				obj[key] = tableQuery.value[key]
			}
		}
		// 获取需要显示合计行的相关参数
		if (props.summaryOptions && props.summaryOptions.length > 0) {
			obj.sumColumns = props.summaryOptions.map((item) => item.value)
		}
		// 如果不需要分页，则无分页相关参数
		return props.isPagination ? { ...listInfo.query, ...obj } : obj
	}

	/**
	 * 获取表格数据
	 * @param api 请求接口
	 */
	function getList(api: JlgTableProps['api']) {
		listInfo.loading = true
		return new Promise((resolve, reject) => {
			// 每次调用接口时都自动绑定最新的数据
			api(handleParams())
				.then((res: unknown) => {
					let responseList = props.beforeResponseCallback
						? props.beforeResponseCallback(res)
						: res

					/**
					 * 当需要跨页勾选且数据中没有唯一主键时,可以将 props.useRowKey 设置为一个函数,返回一个唯一值
					 */
					if (props.useRowKey && typeof props.useRowKey === 'function') {
						let useRowKey = props.useRowKey
						responseList = responseList.map(
							(item: Record<string, any>, index: number) => {
								let _X_ROW_KEY = useRowKey(item, index)
								if (_X_ROW_KEY) {
									let keyField = props.rowConfig?.keyField as string
									item[keyField || '_X_ROW_KEY'] = _X_ROW_KEY
								}
								return item
							}
						)
					}

					emit('update:data', responseList)
					if (props.isPagination) {
						// item2 : 后端返回的总条数
						listInfo.total = responseList.item2
					}
					resolve(responseList)
					emit('handleEvent', 'list', responseList)
				})
				.catch((e: unknown) => {
					reject(e)
				})
				.finally(() => {
					listInfo.loading = false
					nextTick(() => {
						getSelectedRecordset()
					}).then((r) => r)
				})
		})
	}

	/**
	 * 获取当前选中的数据
	 */
	function getSelectedRecordset() {
		if (!xTable.value) return
		if (props.isCheckBox) {
			const records = xTable.value.getCheckboxRecords()
			const reserves = xTable.value.getCheckboxReserveRecords()
			state.selection = (
				props.checkboxConfig as VxeTablePropTypes.CheckboxConfig
			).reserve
				? records.concat(reserves)
				: records
		} else {
			state.selection = xTable.value.getRadioRecord()
		}
		return state.selection
	}

	function sortColumns(columns: JlgColumnProps[]) {
		const sort = (data: JlgColumnProps[]) => {
			return data.sort((s, e) => {
				let a = Number.isNaN(Number(s.rank)) ? 0 : Number(s.rank)
				let b = Number.isNaN(Number(e.rank)) ? 0 : Number(e.rank)
				return a - b
			})
		}
		return sort(columns)
	}

	function getSummaries(params: {
		$table: VxeTableConstructor & VxeTablePrivateMethods
		$grid: VxeGridConstructor | null | undefined
		columns: VxeTableDefines.ColumnInfo[]
		data: any[]
	}) {
		const { columns, data } = params
		let sums: any
		if (props.summaryMethod) {
			sums = props.summaryMethod(params)
		} else {
			const summaryOptions: JlgTableProps['summaryOptions'] =
				props.summaryOptions
			sums = [
				columns.map((column, _columnIndex) => {
					if (_columnIndex === 1) {
						return '合计'
					}
					if (
						summaryOptions
							?.map((obj) => obj.value)
							.includes(column.field as string)
					) {
						const type = summaryOptions.find(
							(item) => item.value === column.field
						)?.type
						return sumNum(data, column.field, type)
					}
					return null
				})
			]
		}
		return sums
	}

	function sumNum(list: any[], field: string, type?: string) {
		let count: string | number = 0
		list.forEach((item) => {
			count = Number(count) + Number(item[field] || 0)
		})
		count = type === 'money' ? '￥' + getThousandNum(count) : count
		return count
	}

	function getThousandNum(number: number) {
		let n = number
		let r = ''
		let temp = 0
		do {
			// 求模的值， 用于获取高三位，这里可能有小数
			const mod = n % 1000
			// 值是不是大于1，是继续的条件
			n = n / 1000
			// 高三位
			temp = ~~mod
			// 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
			// 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
			// 2.拼接“,”
			r = (n >= 1 ? `${temp}`.padStart(3, '0') : temp) + (r ? ',' + r : '')
		} while (n >= 1)
		const strNumber = number + ''
		const index = strNumber.indexOf('.')
		// 拼接小数部分
		if (index >= 0) {
			r += strNumber.substring(index)
		}
		return r
	}
	/**
	 *  控制快捷菜单是否可见
	 */
	function menuVisibleMethod(params: {
		type: string
		options: VxeTableDefines.MenuFirstOption[][]
		columns: VxeTableDefines.ColumnInfo[]
		row?: any
		rowIndex?: number
		column?: VxeTableDefines.ColumnInfo
		columnIndex?: number
	}) {
		let { options, column } = params
		const isVisible =
			column && column.type !== 'seq' && column.type !== 'checkbox'
		const code = column?.field ? column.field : column?.title || ''
		const key = column?.field ? 'field' : 'title'
		// 获取当前列的 column 数据，可能存在多级表头，需要递归查找
		state.columnData = filterTableMater(code, key, state.columns)
		options.forEach((list) => {
			list.forEach((item) => {
				if (
					['hideColumn', 'allColumnWidthAdaptive'].includes(item.code as string)
				) {
					item.visible = isVisible
				}
				if (
					['resetColumnWidth', 'currentColumnWidthAdaptive'].includes(
						item.code as string
					)
				) {
					const isAutoFit = state.columnData && state.columnData.isAutoFit
					item.visible =
						isVisible &&
						(item.code === 'resetColumnWidth' ? !!isAutoFit : !isAutoFit)
				}
			})
		})
		return true
	}

	/**
	 * @description: 递归遍历查找数组对象的某个值
	 * @param {string} code
	 * @param {string} key
	 * @param {array} arr
	 * @returns {object}
	 */
	function filterTableMater(
		code: string,
		key: string,
		arr: Array<any>
	): unknown {
		for (const item of arr) {
			if (item[key] === code) {
				return item
			}
			if (item.children && item.children.length) {
				const _item = filterTableMater(code, key, item.children)
				if (_item) return _item
			}
		}
	}

	/**
	 * 显示当前的 索引
	 * */
	function setSortIndex(value: string) {
		let result = 0
		if (!sortList.value) {
			return ''
		}
		for (let i = 0; i < sortList.value.length; i++) {
			const valueElement = sortList.value[i]
			if (value === valueElement.field) {
				result = i + 1
				break
			}
		}
		return result || ''
	}

	/**
	 * 获取当前元素的left、top偏移
	 *   left：元素最左侧距离文档左侧的距离
	 *   top:元素最顶端距离文档顶端的距离
	 *   right:元素最右侧距离文档右侧的距离
	 *   bottom：元素最底端距离文档底端的距离
	 *   rightIncludeBody：元素最左侧距离文档右侧的距离
	 *   bottomIncludeBody：元素最底端距离文档最底部的距离
	 */
	function getViewportOffset(element: HTMLElement) {
		const doc = document.documentElement

		const docScrollLeft = doc.scrollLeft
		const docScrollTop = doc.scrollTop
		const docClientLeft = doc.clientLeft
		const docClientTop = doc.clientTop

		const pageXOffset = window.pageXOffset || window.scrollX
		const pageYOffset = window.pageYOffset || window.scrollY

		const box = getBoundingClientRect(element)

		const { x: retLeft, y: rectTop, width: rectWidth, height: rectHeight } = box

		const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0)
		const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0)
		const offsetLeft = retLeft + pageXOffset
		const offsetTop = rectTop + pageYOffset

		const left = offsetLeft - scrollLeft
		const top = offsetTop - scrollTop

		const clientWidth = window.document.documentElement.clientWidth
		const clientHeight = window.document.documentElement.clientHeight
		return {
			left: left,
			top: top,
			right: clientWidth - rectWidth - left,
			bottom: clientHeight - rectHeight - top,
			rightIncludeBody: clientWidth - left,
			bottomIncludeBody: clientHeight - top
		}
	}
	function getBoundingClientRect(element: HTMLElement): {
		width: number
		x: number
		y: number
		height: number
	} {
		if (!element || !element.getBoundingClientRect) {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		}
		return element.getBoundingClientRect()
	}

	return {
		refresh,
		clearSelections,
		getList,
		sortColumns,
		getSummaries,
		getSelectedRecordset,
		menuVisibleMethod,
		setSortIndex,
		getViewportOffset
	}
}
