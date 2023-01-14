import XEUtils from 'xe-utils'

const GlobalConfig = {
	size: null, // 全局尺寸
	emptyCell: '　',
	table: {
		showHeader: true,
		autoResize: true,
		keepSource: false,
		showOverflow: null,
		showHeaderOverflow: null,
		showFooterOverflow: null,
		size: null,
		zIndex: null,
		stripe: false,
		border: false,
		round: false,
		emptyText: '暂无数据',
		rowConfig: {
			keyField: '_X_ROW_KEY', // 行数据的唯一主键字段名
			isCurrent: true // 当前行
		},
		checkboxConfig: {
			reserve: false, // 保留选中状态
			trigger: 'cell' // 触发方式
		},
		sortConfig: {
			multiple: true,
			trigger: 'cell',
			remote: true,
			chronological: true
		},
		align: null,
		headerAlign: null,
		/**
		 * 接口请求成功后的回调
		 */
		beforeResponseCallback: (res: {
			item1: Array<Record<string, any>>
			item2: number
		}) => {
			return { list: res.item1, total: res.item2 }
		}
	},
	form: {},
	input: {},
	textarea: {},
	select: {
		beforeAssignOptions: null
	}
}

export default GlobalConfig

/**
 * 全局参数设置
 */
export const setup = (options: Partial<typeof GlobalConfig>) => {
	return XEUtils.merge(GlobalConfig, options)
}
