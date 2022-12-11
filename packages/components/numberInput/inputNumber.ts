import { itemProps } from '../../hooks/itemType'
import { inputEmits as epInputEmits } from 'element-plus'

export const numberInputProps = {
	...itemProps,
	// 双向绑定的input值
	modelValue: [Number, String],
	/*_________________ end ____________________*/
	// 占位符，注意：禁用时不显示
	placeholder: String,
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

export const numberInputEmits = epInputEmits
