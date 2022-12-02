import { itemProps } from '../../hooks/itemType'

export const datePickerProps = {
	...itemProps,
	/*_________________ end ____________________*/
	// 双向绑定的值
	modelValue: {
		type: [Date, Number, String, Array],
		default: ''
	},
	// 允许选择的最小时间
	min: {
		type: [Date, Number, String],
		default: ''
	},
	// 允许选择的最大时间
	max: {
		type: [Date, Number, String],
		default: ''
	},
	// type = monthrange | daterange | datetimerange 时有效,开始范围绑定值
	startRange: {
		type: [Date, Number, String],
		default: ''
	},
	// type = monthrange | daterange | datetimerange 时有效,结束范围绑定值
	endRange: {
		type: [Date, Number, String],
		default: ''
	}
}

export const datePickerEmits = [
	'update:modelValue',
	'update:startRange',
	'update:endRange'
]
