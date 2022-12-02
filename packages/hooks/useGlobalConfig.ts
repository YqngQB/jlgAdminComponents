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
	tooltip: {
		// size: null,
		trigger: 'hover',
		theme: 'dark',
		enterDelay: 500,
		leaveDelay: 300
	},
	form: {},
	input: {},
	textarea: {},
	select: {}
}

export default GlobalConfig
