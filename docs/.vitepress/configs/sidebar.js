export default {
	'/components/': getComponentsSidebar(),
	'/guide/': getGuideSidebar()
}

function getComponentsSidebar() {
	return [
		{
			text: 'Basic 组件',
			collapsible: true,
			items: [
				{
					text: 'Layout 布局',
					link: '/components/layout'
				},
				{
					text: 'LazyCascade 懒加载级联下拉',
					link: '/components/lazy-cascade'
				}
			]
		},
		{
			text: 'ElForm 扩展',
			items: [
				{
					text: 'Input 输入框',
					link: '/components/input'
				},
				{
					text: 'NumberInput 数字输入框',
					link: '/components/number-input'
				},
				{
					text: 'Autocomplete 自动补全输入框',
					link: '/components/autocomplete'
				},
				{
					text: 'DatePicker 日期选择器',
					link: '/components/date-picker'
				},
				{
					text: 'Select 下拉框',
					link: '/components/select'
				},
				{
					text: 'Form 表单',
					link: '/components/form'
				}
			]
		},
		{
			text: 'Vxe 扩展',
			collapsible: true,
			items: [
				{
					text: 'Modal 对话框',
					link: '/components/modal'
				},
				{
					text: 'Table 表格',
					link: '/components/table'
				}
			]
		},
	]
}

function getGuideSidebar() {
	return [
		{
			text: '指南',
			items: [
				{
					text: '安装',
					link: '/guide/'
				},
				{
					text: '开发常见问题',
					link: '/guide/dev-faq'
				}
			]
		}
	]
}
