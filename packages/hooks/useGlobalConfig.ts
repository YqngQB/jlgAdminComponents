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
			keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
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
