import type { PropType } from 'vue'
import vxeProps from './vxeProps'
import GlobalConfig from '../../../hooks/useGlobalConfig'
import { JlgColumnProps, HandleType, SummaryItem } from '../../../types'

export const jlgTableProps = {
	/**vxe-table 原生属性*/
	...vxeProps,
	//  扩展属性
	/**
	 * 获取数据的接口
	 * */
	api: {
		type: Function as PropType<(parameter: unknown) => Promise<any>>,
		default: null,
		required: true
	},
	// 查询条件
	query: {
		type: Object,
		default: () => {
			return {}
		}
	},
	// 监听高度
	isListenHeight: {
		type: Boolean,
		default: true
	},
	// 单选表格，单选框的宽度
	radioWidth: {
		type: String,
		default: '60px'
	},
	// 自定义类名
	className: {
		type: String,
		default: null
	},
	// 是否允许排序,默认为 true;会被 columns 下的 sortable 属性覆盖
	sortable: {
		type: Boolean,
		default: true
	},
	// 是否显示序号
	tableIndex: {
		type: Boolean,
		default: true
	},
	// 是否显示多选框
	isCheckBox: {
		type: Boolean,
		default: false
	},
	// 复选框配置项
	// checkboxConfig: {
	// 	type: Object,
	// 	default: () => {
	// 		return {
	// 			// 仅对 type=selection 的table有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
	// 			reserve: false,
	// 			// 默认勾选指定行（只会在初始化时被触发一次，需要有 row-id）
	// 			checkRowKeys: [],
	// 			// 是否显示左下角勾选信息
	// 			showStatisticsTips: true
	// 		}
	// 	}
	// },
	// rowKey: [String, Function] as PropType<any>,
	// 仅对 type=selection 的table有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
	selectable: Function,
	// field 字段配置
	columns: {
		type: Array as PropType<Array<JlgColumnProps>>,
		default: () => {
			return []
		}
	},
	// 操作列配置
	handle: {
		type: Object as PropType<HandleType>,
		default: () => {
			return {
				fixed: 'right',
				title: '操作',
				width: '200px',
				btList: []
			}
		}
	},
	// 是否分页
	isPagination: {
		type: Boolean,
		default: true
	},
	// 是否显示表头左侧按钮区域
	showHeaderButtons: {
		type: Boolean,
		default: true
	},
	// 是否显示表头右侧工具区域
	showHeaderTools: {
		type: Boolean,
		default: true
	},
	// 是否显示汇总行
	showSummary: Boolean,
	summaryMethod: Function,
	// 额外的页脚高度
	extraFooterHeight: {
		type: Number,
		default: 0
	},
	summaryOptions: {
		// 配置哪些选项需要显示表尾合计行，不设置默认时将table所有数值列进行求合操作，并显示出来
		type: Array as PropType<Array<SummaryItem>>,
		default: () => {
			return []
		}
	},
	// 默认排序字段
	sorts: {
		type: Array,
		default: () => {
			return []
		}
	},
	// 响应回调之前的钩子
	beforeResponseCallback: {
		type: Function,
		default: () => GlobalConfig.table.beforeResponseCallback
	},
	/**
	 * 当需要跨页勾选且数据中没有唯一主键时,可以将 props.useRowKey 设置为一个函数,返回一个唯一值
	 */
	useRowKey: {
		type: Function as PropType<
			(item: Record<string, any>, index: number) => unknown
		>,
		default: false
	}
}
