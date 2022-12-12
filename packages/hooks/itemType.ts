import { PropType } from 'vue'

export const itemProps = {
	formItemConfig: {
		type: Object,
		default: () => {
			return {}
		}
	},
	/**
	 * 如果组件不需要包裹在 el-form-item 内，需要将 notFormItemWrapped 设置为 true
	 */
	notFormItemWrapped: {
		type: Boolean,
		default: false
	},
	// 重新定义一个class,style ,避免 class与style 被透传到组件的根元素上
	class: String,
	style: Object,
	// 标签文本
	label: {
		type: String,
		default: ''
	},
	// model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。该属性是必填的
	prop: {
		type: [String, Array] as PropType<
			string | Array<string> | null | undefined
		>,
		default: ''
	},
	rules: {
		type: [String, Array] as PropType<
			string | Array<string | Record<string, any>>
		>,
		default: () => {
			return []
		}
	},
	disabled: {
		type: Boolean,
		default: false
	}
}

export const itemEmits = ['update:modelValue']
