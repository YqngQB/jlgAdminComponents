import {
	SetupContext,
	RenderFunction,
	ComponentPublicInstance,
	ExtractPropTypes
} from 'vue'
import { ValueOf, InputBasicProps } from './component'
import { ISelectProps } from 'element-plus'
import { selectProps } from '../components/select/select'
export type IJlgSelectProps = ExtractPropTypes<typeof selectProps>
export type ICurrentOption =
	| IJlgSelectProps['options'][number]
	| null
	| undefined

export type JlgSelectInstance = ComponentPublicInstance<
	{
		epRef: {
			focus: () => void
			blur: () => void
		}
		currentOption: IJlgSelectProps['options'][number]
	},
	JlgSelectConstructor
>

export interface JlgSelectConstructor extends JlgSelectMethods {
	props: JlgSelectProps
	context: SetupContext<JlgSelectEmits>
	renderVN: RenderFunction
}

export type JlgSelectProps = InputBasicProps | IJlgSelectProps | ISelectProps

export interface SelectMethods {
	dispatchEvent(
		type: ValueOf<JlgSelectEmits>,
		params: unknown,
		event: Event
	): void
}
export interface JlgSelectMethods extends SelectMethods {}

export type JlgSelectEmits = ['change']
