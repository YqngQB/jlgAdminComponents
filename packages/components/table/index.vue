<template>
	<div :class="['jlg-table--wrapper', props.className]">
		<div class="jlg-table--header">
			<!--      左侧按钮列表-->
			<div class="jlg-table--header-left">
				<div class="jlg-table--header-left-btns">
					<slot name="buttons" />
				</div>
			</div>
			<!--      右侧工具列表-->
			<div class="jlg-table--header-right">
				<slot name="tools"></slot>
			</div>
		</div>
		<div class="jlg-table--body">
			<vxe-table
				ref="xTable"
				class="sortable-table-wrapper"
				:id="props.id"
				:data="props.data"
				:height="listInfo.tableHeight || undefined"
				:show-overflow="props.showOverflow"
				:border="props.border"
				:align="props.align"
				:stripe="props.stripe"
				:keep-source="props.keepSource"
				:header-cell-style="{
					color: '#110920',
					fontSize: '14px',
					fontWeight: 'bold',
					...props.headerCellStyle
				}"
				:height="listInfo.tableHeight || undefined"
				:data="props.data"
				:show-footer="props.showFooter"
				:footer-method="getSummaries"
				:footer-cell-class-name="props.footerCellClassName"
				:sort-config="props.sortConfig"
				:row-config="props.rowConfig"
				:checkbox-config="props.checkboxConfig"
				:column-config="props.columnConfig"
				:resizable-config="{ minWidth: 60, ...props.resizableConfig }"
				:radio-config="{ trigger: 'row', ...props.radioConfig }"
				:menu-config="tableMenu"
				v-bind="$attrs"
			>
				<vxe-column
					v-if="props.isCheckBox"
					key="selection"
					type="checkbox"
					align="center"
					fixed="left"
					width="60"
					:resizable="false"
				/>
				<vxe-column
					v-if="props.tableIndex"
					type="seq"
					align="center"
					:width="props.fieldList.length === 0 ? '' : 60"
					title="序号"
					fixed="left"
					tree-node
					:resizable="false"
				>
					<template v-slot="scope">
						<span>
							{{
								(listInfo.query.pageIndex - 1) * listInfo.query.pageSize +
								scope.rowIndex +
								1
							}}
						</span>
					</template>
				</vxe-column>
				<!--   操作列     -->
				<vxe-column
					v-if="props.handle"
					key="handle"
					:fixed="props.handle.fixed"
					align="center"
					:title="props.handle.title"
					:width="props.handle.width"
				>
					<template v-slot="scope">
						<template
							v-for="item in fullButtonFilter(scope.row)?.buttonList || []"
						>
							<!-- 自定义操作类型，如果使用插槽则必须放在前两位才会生效 -->
							<slot
								v-if="item.slot"
								:name="'bt-' + item.event"
								:data="{ item, row: scope.row }"
							/>
							<!-- 操作按钮 -->
							<el-button
								v-else
								:key="item.label"
								size="small"
								:type="item.type"
								:icon="item.icon"
								:disabled="item.disabled"
								:loading="item.loading"
                :link="props.handle.link"
								@click.stop="handleClick(item.event, scope.row)"
							>
								{{ item.label }}
							</el-button>
						</template>
						<el-dropdown
							v-if="fullButtonFilter(scope.row)?.extraButtonList?.length"
							trigger="click"
						>
							<el-button
								class="el-filter-link m-l-12px color-[#909399] font-bold"
								link
							>
								...
							</el-button>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item
										v-for="item in fullButtonFilter(scope.row)?.extraButtonList"
										:key="item.label"
										:icon="item.icon"
										:disabled="item.disabled"
										@click.stop="handleClick(item.event, scope.row)"
									>
										{{ item.label }}
									</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</template>
				</vxe-column>
			</vxe-table>
		</div>
		<div class="jlg-table--footer"></div>
	</div>
</template>

<script lang="ts" setup>
import { nextTick, ref, computed, reactive, Component } from 'vue'
import { jlgTableProps } from './props'
import { EmitsOptions, JlgTableProps } from '../../types'
import { useTable } from './hooks/useTable'
import { VxeTableInstance } from 'vxe-table'

const props = defineProps(jlgTableProps)
const emit = defineEmits<EmitsOptions>()

// 列表相关配置
let listInfo = reactive({
	// 表格高度
	tableHeight: 0,
	// 总条数
	total: 0,
	// 加载动画
	loading: false,
	// 分页数量列表
	pageSizes: [30, 50, 100],
	// 查询条件
	query: {
		// 页面隐藏排序，此处为默认排序方式
		sorts: props.sorts,
		// 当前页
		pageIndex: 1,
		// 每页条数
		pageSize: 30
	}
})

const state = reactive({
	// 存储全表已选中的数据
	selection: [],
	// 列配置
	columns: [],
	columnData: {
		isAutoFit: false
	}
})

let xTable = ref<VxeTableInstance>(null)

let {
	refresh,
	clearSelections,
	getList,
	getSelectedRecordset,
	sortColumns,
	getSummaries,
	menuVisibleMethod
} = useTable(props as JlgTableProps, emit, xTable, state, listInfo)

let tableMenu = reactive({
	className: 'page-table--menus',
	header: {
		options: [
			[
				{
					code: 'hideColumn',
					name: '隐藏',
					visible: true,
					prefixIcon: 'iconfont icon-yanjing_yincang'
				},
				{
					code: 'showAllColumn',
					name: '取消隐藏',
					visible: true,
					prefixIcon: 'iconfont icon-yanjing_xianshi'
				},
				{
					code: 'resetColumnWidth',
					name: '重置当前列宽',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyoushouqi'
				},
				{
					code: 'currentColumnWidthAdaptive',
					name: '当前列宽自适应',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyouzhankai'
				},
				{
					code: 'allColumnWidthAdaptive',
					name: '所有列宽自适应',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyouzhankai'
				},
				{
					code: 'resetAllColumnWidth',
					name: '重置所有列宽',
					visible: true,
					prefixIcon: 'iconfont icon-moduanzuoyoushouqi'
				},
				{
					code: 'clearSort',
					name: '清除排序',
					prefixIcon: 'fa el-icon-d-caret color-blue'
				}
			]
		]
	},
	visibleMethod: menuVisibleMethod
})

// 初始化前先排序
sortColumns()

// 获取数据
nextTick(() => {
	refresh()
})

/**
 * 如果操作按钮的长度大于2，则拆分 操作按钮 到两个数组，数据量大的情况下可能会有性能问题
 * 【注意：】 如果使用了按钮的自定义插槽，也只对前两个按钮生效（意思就是 不对 Dropdown 下拉菜单预留插槽操作了）
 */
function fullButtonFilter(row) {
	let buttonList = []
	let extraButtonList = []
	if (props.handle.btList.length < 3) {
		return {
			buttonList:
				props.handle.btList.filter((btItem) => {
					return !btItem.ifRender || btItem.ifRender(row)
				}) || [],
			extraButtonList: []
		}
	}
	// 只有长度大于2的时候才进行计算，减少计算消耗
	props.handle.btList.forEach((btItem) => {
		let ifRender = !btItem.ifRender || btItem.ifRender(row)
		if (buttonList.length < 2 && ifRender) {
			buttonList.push(btItem)
		} else if (ifRender) {
			extraButtonList.push(btItem)
		}
	})
	return {
		buttonList,
		extraButtonList
	}
}

function handleClick(event, data) {
  emit("handleClick", event, data);
}
</script>

<script lang="ts">
export default {
	name: 'jlgTable'
}
</script>

<style lang="scss" scoped>
.jlg-table--wrapper {
	border-radius: var(--el-card-border-radius);
	border: 1px solid var(--el-card-border-color);
	background-color: var(--el-card-bg-color);
	overflow: hidden;
	color: var(--el-text-color-primary);
	transition: var(--el-transition-duration);
}
</style>
