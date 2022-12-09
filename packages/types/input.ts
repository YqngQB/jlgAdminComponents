import { InputInstance } from 'element-plus'
import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf, InputBasicProps } from './component'

export type JlgInputInstance = ComponentPublicInstance<
	{
		/**
		 * el-input 实例
		 */
		epRef: InputInstance
	},
	JlgInputConstructor
>

export interface JlgInputConstructor extends JlgInputMethods {
	props: JlgInputProps
	context: SetupContext<JlgInputEmits>
	renderVN: RenderFunction
}

/**
 * @description 组件 - 表单组件配置项
 */
export type JlgInputProps = InputBasicProps | Partial<InputInstance['props']>

export interface InputMethods {
	dispatchEvent(
		type: ValueOf<JlgInputEmits>,
		params: unknown,
		event: Event
	): void
}
export interface JlgInputMethods extends InputMethods {}

export type JlgInputEmits = ['change', 'focus', 'blur', 'input', 'clear']
