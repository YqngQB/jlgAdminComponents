import { itemProps } from '../../hooks/itemType'

export const numberInputProps = {
	...itemProps,
	// 双向绑定的input值
	modelValue: [Number, String],
	/*_________________ end ____________________*/
	// 精度
	precision: Number,
	// 最大值
	max: {
		type: Number,
		default: Number.POSITIVE_INFINITY
	},
	// 最小值
	min: {
		type: Number,
		default: Number.NEGATIVE_INFINITY
	}
}

export const numberInputEmits = ['update:modelValue', 'change']
