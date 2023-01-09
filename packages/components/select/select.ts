import { computed, PropType } from 'vue'
import { itemProps } from '../../hooks/itemType'

export const selectProps = {
	...itemProps,
	// 双向绑定的input值
	modelValue: [Number, String],
	/*_________________ end ____________________*/

	// 占位符，注意：禁用时不显示
	placeholder: String,
	// 是否启用虚拟化滚动 https://element-plus.gitee.io/zh-CN/component/select-v2.html
	isVirtualized: {
		type: Boolean,
		default: false
	},
	//
	options: {
		type: Array as PropType<Array<Record<string, any>>>,
		default: () => {
			return []
		}
	},
	// 选项的渲染模板所绑定在键名 (el-option 上显示的字段)
	labelKey: {
		type: String,
		// 后端返回的数据中，绝大部分情况是用 text 作为 label 字段名
		default: 'text'
	},
	valueKey: {
		type: String,
		default: 'value'
	},
	/**
	 * 作为 value 唯一标识的键名，绑定值为对象类型时必填
	 * */
	optionKey: {
		type: String,
		default: 'value'
	},
	// 如果想按照自己的意愿为选项进行分组,必须设置该属性(el-select-v2 的 groupKey 只能是 options)
	groupKey: {
		type: String,
		default: ''
	},
	filterable: {
		type: Boolean,
		default: false
	},
	// 其中的选项是否从服务器远程加载
	remote: {
		type: Boolean,
		default: false
	},
	// 非远程搜索模式下，自动获取 options 数据所调用的方法
	autoDispatchMethod: Function,
	beforeAssignOptions: Function
}

export const selectEmits = ['update:modelValue', 'update:options', 'change']
