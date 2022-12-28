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
			isCurrent: true, // 当前行
		},
		checkboxConfig: {
			reserve: false, // 保留选中状态
			trigger: 'cell', // 触发方式
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
		beforeResponseCallback: (response: any) => {
			// item1 : 后端返回的数组数据
			let result = response.item1 ? response.item1 || [] : response;
			return result
		}
	},
	form: {},
	input: {},
	textarea: {},
	select: {}
}

export default GlobalConfig

/**
 * 全局参数设置
 */
export const setup = (options: Partial<typeof GlobalConfig>) => {
	return XEUtils.merge(GlobalConfig, options)
}
