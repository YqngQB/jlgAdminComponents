<template>
	<div
		v-loading="listInfo.loading"
		:class="['jlg-table--wrapper', props.className]"
	>
		<div class="jlg-table--header">
			<!--      左侧按钮列表-->
			<div class="jlg-table--header-left">
				<div class="jlg-table--header-left-btns">
					<slot name="buttons" :data="{ selection: state.selection }" />
				</div>
			</div>
			<!--      右侧工具列表-->
			<div class="jlg-table--header-right">
				<slot name="tools"></slot>
			</div>
		</div>
		<div class="jlg-table--body">
			<vxe-table
				ref="xTable"
				class="sortable-table-wrapper"
				:id="props.id || undefined"
				:data="props.data"
				:height="listInfo.tableHeight || undefined"
				:show-overflow="props.showOverflow"
				:border="props.border"
				:align="props.align"
				:stripe="props.stripe"
				:keep-source="props.keepSource"
				:header-cell-style="headerCellStyle"
				:show-footer="props.showFooter"
				:footer-method="getSummaries"
				:footer-cell-class-name="props.footerCellClassName"
				:sort-config="props.sortConfig"
				:row-config="props.rowConfig"
				:checkbox-config="props.checkboxConfig"
				:column-config="props.columnConfig"
				:resizable-config="resizableConfig"
				:radio-config="radioConfig"
				:menu-config="tableMenu"
				v-bind="$attrs"
				@checkbox-all="selectAllEvent"
				@cell-click="cellClick"
				@cell-dblclick="cellDblclick"
				@sort-change="serverSideSorting"
				@menu-click="contextMenuClickEvent"
			>
				<vxe-column
					v-if="props.isCheckBox"
					key="selection"
					type="checkbox"
					align="center"
					fixed="left"
					width="60"
					:resizable="false"
				/>
				<vxe-column
					v-if="props.tableIndex"
					type="seq"
					align="center"
					:width="props.columns.length === 0 ? '' : 60"
					title="序号"
					fixed="left"
					tree-node
					:resizable="false"
				>
					<template v-slot="scope">
						<span>
							{{
								(listInfo.query.pageIndex - 1) * listInfo.query.pageSize +
								scope.rowIndex +
								1
							}}
						</span>
					</template>
				</vxe-column>
				<!--   操作列     -->
				<vxe-column
					v-if="props.handle"
					key="handle"
					:fixed="props.handle.fixed"
					align="center"
					:title="props.handle.title"
					:width="props.handle.width"
				>
					<template v-slot="scope">
						<template
							v-for="item in fullButtonFilter(scope.row)?.buttonList || []"
						>
							<!-- 自定义操作类型，如果使用插槽则必须放在前两位才会生效 -->
							<slot
								v-if="item.slot"
								:name="'bt-' + item.event"
								:data="{ item, row: scope.row }"
							/>
							<!-- 操作按钮 -->
							<el-button
								v-else
								:key="item.label"
								size="small"
								:type="item.type"
								:icon="item.icon"
								:disabled="item.disabled"
								:loading="item.loading"
								link
								@click.stop="handleClick(item.event, scope.row)"
							>
								{{ item.label }}
							</el-button>
						</template>
						<el-dropdown
							v-if="fullButtonFilter(scope.row)?.extraButtonList?.length"
							trigger="click"
						>
							<el-button
								class="el-filter-link m-l-12px color-[#909399] font-bold"
								link
							>
								<el-icon><MoreFilled /></el-icon>
							</el-button>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item
										v-for="item in fullButtonFilter(scope.row)?.extraButtonList"
										:key="item.label"
										:icon="item.icon"
										:disabled="item.disabled"
										@click.stop="handleClick(item.event, scope.row)"
									>
										{{ item.label }}
									</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</template>
				</vxe-column>
				<jlg-column
					v-for="item in state.columns"
					header-class-name="sortable-header--column"
					:key="item.field"
					:field="item.field"
					:title="item.title"
					:width="item.width"
					:min-width="item.minWidth || 100"
					:max-width="item?.maxWidth"
					:resizable="item.resizable"
					:fixed="item.fixed"
					:align="item.align || 'left'"
					:header-align="item.headerAlign || undefined"
					:footer-align="item.footerAlign || undefined"
					:show-overflow="item.showOverflow || undefined"
					:show-header-overflow="item.showHeaderOverflow || undefined"
					:show-footer-overflow="item.showFooterOverflow || undefined"
					:class-name="item.className"
					:sortable="item.sortable || false"
					:formatter="item.formatter"
					:children="item.children"
					:visible="item.visible"
					:cell-render="item.cellRender"
					:edit-render="item.editRender || undefined"
					:titlePrefix="item.titlePrefix || undefined"
					:is-auto-fit="item.isAutoFit || false"
				>
					<template #header="{ column }">
						<span>{{ column.title }}</span>
						<span style="color: #4381e6">
							{{ ' ' + setSortIndex(column.field) }}
						</span>
					</template>
					<!-- slot 自定义列-->
					<template v-if="item.slotName" v-slot="scope">
						<slot :name="item.slotName" :row="scope.row" :data="scope" />
					</template>
				</jlg-column>
			</vxe-table>
		</div>
		<div class="jlg-table--footer">
			<div class="jlg-table--footer---left"></div>
			<div class="jlg-table--footer---right">
				<vxe-pager
					size="small"
					background
					v-model:current-page="listInfo.query.pageIndex"
					v-model:page-size="listInfo.query.pageSize"
					:total="listInfo.total"
					:page-sizes="listInfo.pageSizes"
					:layouts="[
						'PrevJump',
						'PrevPage',
						'JumpNumber',
						'NextPage',
						'NextJump',
						'Sizes',
						'FullJump',
						'Total'
					]"
					@page-change="handlePageChange"
				>
					<template #right>
						<div
							class="refresh-right flex h-full items-center"
							@click="refresh"
						>
							<el-icon :size="16"><Refresh /></el-icon>
						</div>
					</template>
				</vxe-pager>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	nextTick,
	watch,
	ref,
	reactive,
	unref,
	computed,
	provide,
	onMounted
} from 'vue'
import XEUtils from 'xe-utils'
import { jlgTableProps } from './props'
import { BtList, JlgColumnProps } from '../../types'
import { useTable } from './hooks/useTable'
import { VxeTableInstance } from 'vxe-table'
import { MoreFilled, Refresh } from '@element-plus/icons-vue'
import JlgColumn from './jlgColumn.vue'
import { cloneDeep } from '../../utils/helper'
import { VxeTableEvents, VxeTableDefines, VxeTablePropTypes } from 'vxe-table'
type EmitsOptions = {
	(e: 'update:query', query: any): void
	(e: 'handleEvent', type: string, selection: any, row?: object): void
	(
		e: 'handleEvent',
		row: object,
		rowIndex: number,
		column?: object,
		columnIndex?: number,
		triggerRadio?: boolean,
		triggerCheckbox?: boolean
	): void

	(
		e: 'rowDblclick',
		row: object,
		rowIndex: number,
		column?: object,
		columnIndex?: number
	): void

	(
		e: 'cellClick',
		row: object,
		rowIndex: number,
		column: object,
		columnIndex: number,
		triggerRadio: boolean,
		triggerCheckbox: boolean
	): void

	(e: 'handleClick', type: string, row: object): void

	(e: 'update:data', data: Array<object>): void

	(e: 'update:columns', data: Array<JlgColumnProps>): void

	(e: 'reset'): void
}
const props = defineProps(jlgTableProps)
const emit = defineEmits<EmitsOptions>()

// 列表相关配置
let listInfo = reactive({
	// 表格高度
	tableHeight: 0,
	// 总条数
	total: 0,
	// 加载动画
	loading: false,
	// 分页数量列表
	pageSizes: [30, 50, 100],
	// 查询条件
	query: {
		// 页面隐藏排序，此处为默认排序方式
		sorts: props.sorts,
		// 当前页
		pageIndex: 1,
		// 每页条数
		pageSize: 30
	}
})

const state = reactive({
	// 存储全表已选中的数据
	selection: [],
	// 列配置
	columns: [] as JlgColumnProps[],
	columnData: {
		isAutoFit: false
	}
})

let xTable = ref<VxeTableInstance>()
let sortList = ref<VxeTableDefines.SortCheckedParams[]>([])

let {
	refresh,
	clearSelections,
	getSelectedRecordset,
	sortColumns,
	getSummaries,
	menuVisibleMethod,
	setSortIndex,
	getViewportOffset,
	handlePageChange,
	getTableHeight
} = useTable(props, emit, xTable, state, listInfo, sortList)

provide('$setSortIndex', setSortIndex)
provide('$tableGather', {
	props: props,
	xTable: xTable
})

let tableMenu = reactive<VxeTablePropTypes.MenuConfig>({
	className: 'page-table--menus',
	header: {
		options: [
			[
				{
					code: 'hideColumn',
					name: '隐藏',
					visible: true,
					prefixIcon: 'iconfont icon-yanjing_yincang'
				},
				{
					code: 'showAllColumn',
					name: '取消隐藏',
					visible: true,
					prefixIcon: 'iconfont icon-yanjing_xianshi'
				},
				{
					code: 'resetColumnWidth',
					name: '重置当前列宽',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyoushouqi'
				},
				{
					code: 'currentColumnWidthAdaptive',
					name: '当前列宽自适应',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyouzhankai'
				},
				{
					code: 'allColumnWidthAdaptive',
					name: '所有列宽自适应',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyouzhankai'
				},
				{
					code: 'resetAllColumnWidth',
					name: '重置所有列宽',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyoushouqi'
				},
				{
					code: 'clearSort',
					name: '清除排序',
					prefixIcon: 'fa el-icon-d-caret color-blue'
				}
			]
		]
	},
	visibleMethod: menuVisibleMethod
})

// 计算属性
let radioConfig = computed<VxeTablePropTypes.RadioConfig>(() => {
	return Object.assign(
		{ trigger: 'row' } as Pick<VxeTablePropTypes.RadioConfig, 'trigger'>,
		props?.radioConfig || {}
	)
})
let resizableConfig = computed<VxeTablePropTypes.ResizableConfig>(() => {
	return Object.assign(
		{ minWidth: 60 } as Pick<VxeTablePropTypes.ResizableConfig, 'minWidth'>,
		props?.checkboxConfig || {}
	)
})

let headerCellStyle = computed<VxeTablePropTypes.HeaderCellStyle>(() => {
	return {
		color: '#110920',
		fontSize: '14px',
		fontWeight: 'bold',
		...props.headerCellStyle
	}
})

// 存储默认列配置（用于重置）
let columnDefaults = cloneDeep(props.columns)
// 列配置
state.columns = sortColumns(cloneDeep(props.columns) as JlgColumnProps[])

watch(state.columns, (newVal: JlgColumnProps[]) => {
	emit('update:columns', newVal)
})

// 获取数据
nextTick(() => {
	refresh()
})

/**
 * 如果操作按钮的长度大于2，则拆分 操作按钮 到两个数组，数据量大的情况下可能会有性能问题
 * 【注意：】 如果使用了按钮的自定义插槽，也只对前两个按钮生效（意思就是 不对 Dropdown 下拉菜单预留插槽操作了）
 */
function fullButtonFilter(row: Record<string, any>) {
	let buttonList: BtList[] = []
	let extraButtonList: BtList[] = []
	if (props.handle.btList?.length < 3) {
		return {
			buttonList:
				(props.handle?.btList || []).filter((btItem) => {
					return !btItem.ifRender || btItem.ifRender(row)
				}) || [],
			extraButtonList: []
		}
	}
	// 只有长度大于2的时候才进行计算，减少计算消耗
	props?.handle?.btList &&
		props.handle.btList.forEach((btItem) => {
			let ifRender = !btItem.ifRender || btItem.ifRender(row)
			if (buttonList.length < 2 && ifRender) {
				buttonList.push(btItem)
			} else if (ifRender) {
				extraButtonList.push(btItem)
			}
		})
	return {
		buttonList,
		extraButtonList
	}
}

function handleClick(event: string, data: Record<string, any>) {
	emit('handleClick', event, data)
}

const selectAllEvent: VxeTableEvents.CheckboxAll = () => {
	getSelectedRecordset()
	emit('handleEvent', 'tableCheck', state.selection)
}

const cellClick: VxeTableEvents.CellClick = ({
	row,
	rowIndex,
	column,
	columnIndex,
	triggerRadio,
	triggerCheckbox
}) => {
	getSelectedRecordset()
	if (props.isCheckBox && columnIndex === 0) {
		// 复选
		emit('handleEvent', 'tableCheck', state.selection, row)
	}
	emit(
		'cellClick',
		row,
		rowIndex,
		column,
		columnIndex,
		triggerRadio,
		triggerCheckbox
	)
}

const cellDblclick: VxeTableEvents.CellDblclick = ({
	row,
	rowIndex,
	column,
	columnIndex
}) => {
	emit('rowDblclick', row, rowIndex, column, columnIndex)
}

// 服务器端排序 升序 降序
const serverSideSorting: VxeTableEvents.SortChange = ({
	sortList: sortListValue
}) => {
	updateColumnsSortFunc(sortListValue)
	sortList.value = sortListValue
	if (listInfo.query) {
		// listInfo.query.sorts = sortList.value.map(item => {
		//   // 将有多层级的列字段名拆成数组，并取最后一个字段传递给后端（例如：aa.bb.cc，取 cc 传递给后端排序）
		//   const fieldSplitArray = item.field.split(".");
		//   return {
		//     name: fieldSplitArray[fieldSplitArray.length - 1],
		//     order: item.order
		//   };
		// });
	}
	refresh()
}

const contextMenuClickEvent = () => {}

// 将最新的列排序信息更新到 state.columns 当中
let updateColumnsSortFunc = (sortList: VxeTableDefines.SortCheckedParams[]) => {
	unref(sortList).forEach((sortItem) => {
		let { item } = XEUtils.findTree(state.columns, (column: JlgColumnProps) => {
			return column.field === sortItem.field
		})
		if (item) {
			item.order = sortItem.order
		}
	})
}

/**
 * 用于清空排序条件，数据会恢复成未排序的状态
 * */
function clearSort() {
	sortList.value = []
	xTable.value?.clearSort()
}

onMounted(() => {
	if (props.isListenHeight) {
		getTableHeight()
		// 监听页面大小改变
		window.addEventListener(
			'resize',
        XEUtils.debounce(() => {
				// 得到表格的高度
				getTableHeight()
			}, 200)
		)
		// nextTick(() => {
		//   // 加载完成之后再绑定拖动事件
		//   initTime = setTimeout(() => {
		//     sortable = initColumnSortable(xTable.value, state, props.checkBox);
		//   }, 500);
		// });
	}
})
</script>

<script lang="ts">
export default {
	name: 'jlgTable'
}
</script>

<style lang="scss" scoped>
.jlg-table--wrapper {
	border-radius: var(--el-card-border-radius);
	border: 1px solid var(--el-card-border-color);
	background-color: var(--el-card-bg-color);
	overflow: hidden;
	color: var(--el-text-color-primary);
	transition: var(--el-transition-duration);
	padding: 6px;
	.jlg-table--header {
		display: flex;
		height: 40px;
		align-items: center;
		justify-content: space-between;
	}
	.jlg-table--footer {
		display: flex;
		min-height: 40px;
		align-items: center;
		justify-content: space-between;
		.refresh-right {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			cursor: pointer;
			font-size: 14px;
			color: var(--el-color-primary);
		}
	}
}
</style>
