export default {
	model: {
		type: String,
		default: 'vertical'
	},
	// 顶部栏高度
	headerHeight: {
		type: String,
		default: '60px'
	},
	// 顶部栏是否显示
	showHeader: {
		type: Boolean,
		default: true
	},
	// 侧边栏宽度
	asideWidth: {
		type: String,
		default: '200px'
	},
	// 侧边栏是否显示
	showAside: {
		type: Boolean,
		default: true
	},
	// 底部区域是否显示
	showFooter: {
		type: Boolean,
		default: true
	},
	footerHeight: {
		type: String,
		default: '60px'
	}
}
