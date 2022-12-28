import { SetupContext, RenderFunction, ComponentPublicInstance } from 'vue'
import { ValueOf } from './component'
import type { VxeTableEmits, VxeTableInstance, VxeTableProps } from 'vxe-table'

export type JlgTableInstance = ComponentPublicInstance<
	{ xTable: VxeTableInstance },
	JlgTableConstructor
>

export interface JlgTableConstructor extends JlgTableMethods {
	props: JlgTableProps
	context: SetupContext<JlgTableEmits>
	renderVN: RenderFunction
}

export type SummaryItem = {
	value: string
	type: string
}

/**
 * @description 组件 - 表单组件配置项
 */
export interface JlgTableProps extends VxeTableProps {
	api: (params: any) => Promise<Record<string, any>>
	query: Record<string, any>
	radioWidth: number | string
	checkboxWidth: number | string
	className: string
	/**
	 * 是否允许排序,默认为 true;会被 columns 下的 sortable 属性覆盖
	 */
	sortable: boolean
	/**
	 * tableIndex 是否显示序号列
	 */
	tableIndex: boolean
	/**
	 * 是否监听高度变化
	 */
	isListenHeight: boolean
	/**
	 * 是否显示多选框
	 */
	isCheckBox: boolean
	/**
	 * 是否显示分页
	 */
	isPagination: boolean
	/**
	 * 是否显示表头左侧按钮区域
	 */
	showHeaderButtons: boolean
	/**
	 * 是否显示表头右侧工具区域
	 */
	showHeaderTools: boolean
	/**
	 * 是否显示汇总行
	 */
	showSummary: boolean
	summaryMethod: Function
	/**
	 * 配置哪些选项需要显示表尾合计行，不设置默认时将table所有数值列进行求合操作，并显示出来
	 */
	summaryOptions: Array<SummaryItem>
	// 额外的页脚高度
	extraFooterHeight: number
	sorts: Array<Record<string, any>>
	beforeResponseCallback: Function
    useRowKey: Function
}

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
    (e: "update:query", query: any): void;
    (e: "handleEvent", type: string, selection: any, row?: object): void;

    (
        e: "handleEvent",
        row: object,
        rowIndex: number,
        column?: object,
        columnIndex?: number,
        triggerRadio?: boolean,
        triggerCheckbox?: boolean
    ): void;

    (
        e: "rowDblclick",
        row: object,
        rowIndex: number,
        column?: object,
        columnIndex?: number
    ): void;

    (
        e: "cellClick",
        row: object,
        rowIndex: number,
        column: object,
        columnIndex: number,
        triggerRadio: boolean,
        triggerCheckbox: boolean
    ): void;

    (e: "handleClick", type: string, row: object): void;

    (e: "update:data", data: Array<object>): void;

    (e: "update:field-list", data: Array<object>): void;

    (e: "reset"): void;
}