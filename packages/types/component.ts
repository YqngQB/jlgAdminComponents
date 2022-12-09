import { App, VNode } from 'vue'
import {FormItemInstance} from "element-plus";

export type SizeType = null | 'medium' | 'small' | 'mini'
export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T]

export type JLGComponent<P = {}, E = {}> = {
	new (): {
		$props: P & E
	}
} & {
	install(app: App): void
}

export interface RecordInfo {
	[key: string]: any
}

export interface JlgEvent {
	$event: Event
	[key: string]: any
}

export type VNodeStyle = {
	[key: string]: string | number
}

export type SlotVNodeType = JSX.Element | VNode | string | number

/**
 * @description 组件 - 属性额外配置项
 */
export interface InputBasicProps {
	/**
	 * 绑定值
	 */
	modelValue?: any
	/**
	 * el-form-item 配置项
	 */
	formItemConfig?: FormItemInstance['props']
	/**
	 *  label 标签文本
	 */
	label?: string
	/**
	 * model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])，或者一个点分隔的路径(例如 'a.b.0')。
	 */
	prop?: string | string[],
	/**
	 * 表单校验规则。可以是一个以管状符分隔的字符串 例如 'required|email'，也可以是一个包含验证规则的对象数组 例如 ['required',{ required: true, message: '请输入邮箱地址', trigger: 'blur' }]。
	 */
	rules?: FormItemInstance['props']['rules'] | string
	/**
	 * 是否禁用
	 */
	disabled?: boolean,
	/**
	 * 是否可清空
	 */
	clearable?: boolean,
	/**
	 * 输入框前置文本,效果同 prepend 插槽
	 */
	prependText?: string,
	/**
	 * 输入框后置文本,效果同 append 插槽
	 */
	appendText?: string,
	/**
	 * 输入框头部文本内容,效果同 prefix 插槽
	 */
	prefixText?: string,
	/**
	 * 输入框尾部文本内容,效果同 suffix 插槽
	 */
	suffixText?: string
}
