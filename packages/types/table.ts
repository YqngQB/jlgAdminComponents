import {
	SetupContext,
	RenderFunction,
	ComponentPublicInstance,
	Component,
	ExtractPropTypes
} from 'vue'
import { ValueOf } from './component'
import type { VxeTableEmits, VxeTableInstance, VxeColumnProps } from 'vxe-table'
import { VxeColumnPropTypes } from 'vxe-table'
import { jlgTableProps } from '../components/table/props'

export type JlgTableInstance = ComponentPublicInstance<
	{ xTable: VxeTableInstance },
	JlgTableConstructor
>

export interface JlgTableConstructor extends JlgTableMethods {
	props: JlgTableProps
	context: SetupContext<JlgTableEmits>
	renderVN: RenderFunction
}

export interface HandleType {
	// 固定列
	fixed: VxeColumnPropTypes.Fixed
	title: string
	width: string
	btList: Array<BtList>
}
export type BtList = {
	label: string
	// 是否使用插槽
	slot: boolean
	// 触发事件的类型
	event: string
	// 自定义显示规则
	ifRender?: (value: object) => boolean
	// el-button 的类型
	type?: string
	// el-button 的icon
	icon?: string | Component
	// 是否禁用
	disabled?: boolean
	// 是否加载中
	loading?: boolean
}

export type SummaryItem = {
	value: string
	type: string
}

/**
 * @description 组件 - 表单组件配置项
 */
export type JlgTableProps = ExtractPropTypes<typeof jlgTableProps>

export interface TableMethods {
	dispatchEvent(type: ValueOf<JlgTableEmits>, params: any, event?: Event): void
}
export interface JlgTableMethods extends TableMethods {
	/**
	 * 对表单进行校验并提交。如果校验成功，promise 的 resolve 回调函数会返回一个新的表单数据对象。校验失败 reject 会返回一个包含校验错误信息的对象。
	 * @param errText 自定义错误提示文本
	 */
	submit(errText?: string): Promise<Record<string, any>>
}

export type JlgTableEmits = [...VxeTableEmits]

export type EmitsOptions = {
	(e: 'update:query', query: any): void
	(e: 'handleEvent', type: string, selection: any, row?: object): void

	(
		e: 'handleEvent',
		row: object,
		rowIndex: number,
		column?: object,
		columnIndex?: number,
		triggerRadio?: boolean,
		triggerCheckbox?: boolean
	): void

	(
		e: 'rowDblclick',
		row: object,
		rowIndex: number,
		column?: object,
		columnIndex?: number
	): void

	(
		e: 'cellClick',
		row: object,
		rowIndex: number,
		column: object,
		columnIndex: number,
		triggerRadio: boolean,
		triggerCheckbox: boolean
	): void

	(e: 'handleClick', type: string, row: object): void

	(e: 'update:data', data: Array<object>): void

	(e: 'update:columns', data: Array<JlgColumnProps>): void

	(e: 'reset'): void
}

export interface JlgColumnProps extends Omit<VxeColumnProps, 'type'> {
	order?: 'asc' | 'desc' | null
	/**
	 * 排序等级，值越大，排序约越靠后
	 */
	rank?: number
	/**
	 * 是否设置列宽自适应
	 */
	isAutoFit?: boolean
	/**
	 * 子列配置项
	 */
	children?: Array<JlgColumnProps>
	/**
	 * 自定义列插槽名称
	 */
	slotName?: string
}
