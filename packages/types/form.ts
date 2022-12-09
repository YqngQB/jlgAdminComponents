import { FormInstance } from 'element-plus'
import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf } from './component'

export declare type RulesType = string | Array<string | Record<string, any>>

export type JlgFormInstance = ComponentPublicInstance<
	{
		/**
		 * el-form 实例
		 */
		epRef: FormInstance
	},
	JlgFormConstructor
>

export interface JlgFormConstructor extends JlgFormMethods {
	props: JlgFormProps
	context: SetupContext<JlgFormEmits>
	renderVN: RenderFunction
}

/**
 * @description 组件 - 表单组件配置项
 */
export type JlgFormProps = {
	/**
	 * 表单数据对象
	 */
	model: Record<string, any>
	/**
	 * 行内表单模式
	 */
	inline?: boolean
	/**
	 * 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性
	 */
	labelPosition?: 'left' | 'right' | 'top'
	/**
	 * 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
	 */
	labelWidth?: string | number
	/**
	 * 是否隐藏必填字段标签旁边的红色星号
	 */
	hideRequiredAsterisk?: boolean
	/**
	 * 星号的位置
	 */
	requireAsteriskPosition?: 'left' | 'right'
	/**
	 * 是否以行内形式展示校验信息
	 */
	inlineMessage?: boolean
	/**
	 * 是否在输入框中显示校验结果反馈图标
	 */
	statusIcon?: boolean
	/**
	 * 是否在 rules 属性改变后立即触发一次验证
	 */
	validateOnRuleChange?: boolean
	/**
	 * 用于控制该表单内组件的尺寸
	 */
	size?: 'large' | 'default' | 'small'
	/**
	 * 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性
	 */
	disabled?: boolean
	/**
	 * 当校验失败时，滚动到第一个错误表单项
	 */
	scrollToError?: boolean
}

export interface FormMethods {
	dispatchEvent(
		type: ValueOf<JlgFormEmits>,
		params: unknown,
		event: Event
	): void
	/**
	 * 对表单进行校验并提交。如果校验成功，promise 的 resolve 回调函数会返回一个新的表单数据对象。校验失败 reject 会返回一个包含校验错误信息的对象。
	 * @param errText 自定义错误提示文本
	 */
	submit(errText?: string): Promise<Record<string, any>>
}
export interface JlgFormMethods extends FormMethods {}

export type JlgFormEmits = []
