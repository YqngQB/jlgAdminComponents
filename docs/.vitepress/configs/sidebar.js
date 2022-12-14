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
				}
			]
		},
		{
			text: 'Form 组件',
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
					text: 'LazyCascade 级联下拉框',
					link: '/components/lazy-cascade'
				},
				{
					text: 'Form 表单',
					link: '/components/form'
				},
				{
					text: 'Modal 对话框',
					link: '/components/modal'
				}
			]
		}
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
