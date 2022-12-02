import { itemProps } from '../../hooks/itemType'
export const autocompleteProps = {
	...itemProps,
	// 双向绑定的值
	modelValue: {
		type: [String, Number, Object],
		default: ''
	},
	// 是否禁用
	disabled: {
		type: Boolean,
		default: false
	},
	// 占位符，注意：禁用时不显示
	placeholder: String,
	// 在原有插槽基础上扩展,简单文本不必要使用插槽
	prependText: String,
	appendText: String,
	prefixText: String,
	suffixText: String
}

export const autocompleteEmits = ['update:modelValue']
