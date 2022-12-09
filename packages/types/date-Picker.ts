import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf, InputBasicProps } from './component'

export type JlgDatePickerInstance = ComponentPublicInstance<
	{
		/**
		 * el-input 实例
		 */
		epRef: {
			focus: () => void
			handleOpen: () => void
			handleClose: () => void
		}
	},
	JlgDatePickerConstructor
>

export interface JlgDatePickerConstructor extends JlgDatePickerMethods {
	props: JlgDatePickerProps
	context: SetupContext<JlgDatePickerEmits>
	renderVN: RenderFunction
}

interface DatePickerProps {
	min: string
	max: string
	editable?: boolean
	clearable?: boolean
	placeholder: string
	startPlaceholder?: string
	endPlaceholder?: string
	readonly?: boolean
	type: string
	format: string
	popperClass: string
	rangeSeparator: string
	defaultValue: Date | [Date, Date]
	defaultTime: Date | [Date, Date]
	valueFormat: string
	unlinkPanels: boolean
	prefixIcon: string
	clearIcon: string
	validateEvent: boolean
	disabledDate: (date: Date) => boolean
	shortcuts: Array<{ text: string; value: Date | Function }>,
	cellClassName: (date: Date) => string,
	teleported: boolean
}
export type JlgDatePickerProps = InputBasicProps | DatePickerProps

export interface DatePickerMethods {
	dispatchEvent(
		type: ValueOf<JlgDatePickerEmits>,
		params: unknown,
		event: Event
	): void
}
export interface JlgDatePickerMethods extends DatePickerMethods {}

export type JlgDatePickerEmits = ['change', 'focus', 'blur', 'calendarChange', 'panelChange', 'visibleChange']
