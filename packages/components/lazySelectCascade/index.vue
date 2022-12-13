<template>
	<div class="jlg-cascader" :style="{ width: cascadeProps.width }">
		<el-tooltip
			:visible="popperVisible"
			placement="bottom-start"
			ref="tooltipRef"
			width="auto"
		>
			<!--内容区域 start -->
			<template #reference>
				<div
					class="el-input"
					@click.stop="togglePopperVisible(!popperVisible)"
					:class="isDisabled ? 'is-disabled' : 'cursor-pointer'"
					@mouseenter="inputHover = true"
					@mouseleave="inputHover = false"
				>
					<div class="el-input__wrapper">
						<div class="el-input__inner jlg-cascader-input">
							<span
								class="jlg-cascader-placeholder"
								v-show="placeholderVisible"
							>
								{{ cascadeProps.placeholder }}
							</span>

							<div v-if="multiple" ref="tagWrapper">
								<el-tag
									class="jlg-cascader-tag"
									v-for="tag in presentTags"
									:key="tag.key"
									:type="cascadeProps.tagType"
									size="small"
									:hit="tag.hitState"
									:closable="tag.closable"
									disable-transitions
									@close="deleteTag(tag)"
								>
									<template v-if="tag.isCollapseTag === false">
										<span>{{ tag.text }}</span>
									</template>
									<template v-else>
										<el-tooltip
											:teleported="false"
											:disabled="
												popperVisible || !cascadeProps.collapseTagsTooltip
											"
											:fallback-placements="['bottom', 'top', 'right', 'left']"
											placement="bottom"
											effect="light"
										>
											<template #default>
												<span>{{ tag.text }}</span>
											</template>
											<template #content>
												<div
													v-for="(tag2, idx) in allPresentTags.slice(1)"
													:key="idx"
												>
													<el-tag
														:key="tag2.key"
														class="jlg-cascader-tag"
														:type="cascadeProps.tagType"
														size="small"
														:hit="tag2.hitState"
														:closable="tag2.closable"
														disable-transitions
														@close="deleteTag(tag2)"
													>
														<span>{{ tag2.text }}</span>
													</el-tag>
												</div>
											</template>
										</el-tooltip>
									</template>
								</el-tag>
							</div>
							<div class="jlg-cascader-label" v-else>
								<el-tooltip placement="top-start" :content="presentText">
									<span>{{ presentText }}</span>
								</el-tooltip>
							</div>
						</div>
						<p class="el-input__suffix jlg-cascader-clear">
							<span class="el-input__suffix-inner">
								<el-icon
									v-if="clearBtnVisible"
									key="clear"
									:class="['el-icon', 'icon-circle-close']"
									@click.stop="handleClear"
								>
									<circle-close />
								</el-icon>
								<el-icon
									v-else
									key="arrow-down"
									:class="[
										'el-icon',
										'icon-arrow-down',
										{ 'is-reverse': popperVisible }
									]"
								>
									<arrow-down />
								</el-icon>
							</span>
						</p>
					</div>
				</div>
			</template>
			<!--内容区域 end-->

			<!--下拉区域 start-->
			<div
				v-click-outside[popperPaneRef]="
					() => (popperVisible ? togglePopperVisible(false) : '')
				"
			>
				<!-- 搜索 start -->
				<div class="jlg-cascader-search">
					<el-autocomplete
						ref="autocomplete"
						:style="{ width: cascadeProps.searchWidth || '100%' }"
						:popper-class="cascadeProps.suggestionsPopperClass"
						v-if="cascadeProps.filterable"
						class="inline-input"
						label="name"
						v-model="store.keyword"
						:fetch-suggestions="handleFilter"
						:trigger-on-focus="false"
						placeholder="请输入"
						@select="handleSuggestionClick"
						@blur="store.isSearchEmpty = false"
					>
						<template #suffix>
							<el-icon class="el-input__icon">
								<edit />
							</el-icon>
						</template>
						<template v-slot="{ item }">
							<div
								class="name"
								:class="isChecked(item[cascadeProps.props.value || 'value'])"
							>
								{{
									item[cascadeProps.props.label || 'label'].join(
										cascadeProps.separator
									)
								}}
							</div>
						</template>
					</el-autocomplete>
					<div class="empty" v-show="store.isSearchEmpty">
						{{ cascadeProps.searchEmptyText }}
					</div>
				</div>
				<!-- 搜索 end -->
				<!-- 级联面板 start -->
				<div class="jlg-cascader-panel">
					<el-cascader-panel
						ref="panel"
						:key="store.panelKey"
						v-model="store.current"
						:options="store.options"
						:props="store.currentProps"
						@change="change"
						:render-label="$slots.default"
						@expand-change="handleExpandChange"
						@close="$nextTick(() => togglePopperVisible(false))"
					/>
				</div>
				<!-- 级联面板 end -->
			</div>
			<!--下拉区域 end-->
		</el-tooltip>
	</div>
</template>
<script lang="ts" setup>
import { ArrowDown, CircleClose, Edit } from '@element-plus/icons-vue'
import {
	CascaderNode,
	CascaderOption,
	Resolve,
	Tag,
	CascaderValue,
	useFormItem
} from 'element-plus'
import {
	ElIcon,
	ElTag,
	ElTooltip,
	ElPopover,
	ElAutocomplete,
	ElCascaderPanel
} from 'element-plus'
import { ClickOutside as vClickOutside } from 'element-plus'
import { ref, unref, reactive, computed, watch, nextTick, PropType } from 'vue'
import type { CascaderProps } from 'element-plus'

const { form, formItem } = useFormItem()

let panel = ref<InstanceType<typeof ElCascaderPanel> | null>(null)
let tooltipRef = ref<InstanceType<typeof ElPopover> | null>(null)

const tagWrapper = ref(null)
const presentTags = ref<Tag[]>([])
const allPresentTags = ref<Tag[]>([])

let emit = defineEmits([
	'update:modelValue',
	'change',
	'visible-change',
	'expand-change',
	'remove-tag'
])

let cascadeProps = defineProps({
	modelValue: {
		type: Array,
		default: () => {
			return []
		}
	},
	showAllLevels: {
		type: Boolean,
		default: true
	},
	collapseTags: Boolean,
	collapseTagsTooltip: Boolean,
	tagType: { type: String, default: 'info' },
	separator: {
		type: String,
		default: ' > '
	},
	placeholder: {
		type: String,
		default: '请选择'
	},

	width: {
		type: String,
		default: '400px'
	},
	filterable: Boolean,
	clearable: Boolean,
	disabled: Boolean,
	props: {
		type: Object as PropType<CascaderProps & { lazySearch: Function }>,
		default: () => {
			return {
				multiple: false,
				value: 'value',
				label: 'label',
				children: 'children',
				disabled: 'disabled',
				leaf: 'leaf',
				checkStrictly: false
			}
		}
	},
	suggestionsPopperClass: {
		type: String,
		default: 'suggestions-popper-class'
	},
	searchWidth: {
		type: String
	},
	searchEmptyText: {
		type: String,
		default: '暂无数据'
	},
	beforeFilter: {
		type: Function as PropType<(value: string) => boolean | Promise<any>>,
		default: () => true
	}
})

const checkedNodes = computed<CascaderNode[]>(
	() => panel.value?.checkedNodes || []
)

const inputHover = ref(false)
const clearBtnVisible = computed(() => {
	if (!cascadeProps.clearable || isDisabled.value || !inputHover.value)
		return false
	return !!checkedNodes.value.length
})

const isDisabled = computed(() => cascadeProps.disabled || form?.disabled)
const multiple = computed(() => !!cascadeProps.props.multiple)
const presentText = computed(() => {
	const { showAllLevels, separator } = cascadeProps
	const nodes = checkedNodes.value
	return nodes.length
		? multiple.value
			? ''
			: nodes[0].calcText(showAllLevels, separator)
		: ''
})

let store = reactive<any>({
	isSearchEmpty: false,
	panelKey: 0,
	keyword: '',
	options: [],
	current: [],
	labelObject: { label: [], value: [] },
	labelArray: [],
	currentProps: {
		multiple: cascadeProps.props.multiple || false,
		checkStrictly: cascadeProps.props.checkStrictly || false,
		value: cascadeProps.props.value || 'value',
		label: cascadeProps.props.label || 'label',
		leaf: cascadeProps.props.leaf || 'leaf',
		lazy: true,
		lazyLoad: lazyLoad
	}
})

watch(
	() => cascadeProps.modelValue,
	(v) => {
		store.current = v
	}
)

watch(
	() => store.current,
	(v) => {
		emit('update:modelValue', v)
	}
)

watch(
	() => store.isSearchEmpty,
	() => {
		store.isSearchEmpty = false
	}
)

/**
 * 懒加载数据
 * */
function lazyLoad(node: CascaderNode, resolve: Resolve) {
	cascadeProps.props.lazyLoad(
		node,
		(dataList?: CascaderOption[] | undefined) => {
			resolve(dataList)
		}
	)
}

let placeholderVisible = computed(() => {
	if (store.current) {
		return store.current.length == 0
	} else {
		return true
	}
})

const genTag = (node: CascaderNode): Tag => {
	const { showAllLevels, separator } = cascadeProps
	return {
		node,
		key: node.uid,
		text: node.calcText(showAllLevels, separator),
		hitState: false,
		closable: !isDisabled.value && !node.isDisabled,
		isCollapseTag: false
	}
}
const deleteTag = (tag: Tag) => {
	const node = tag.node as CascaderNode
	node.doCheck(false)
	panel.value?.calculateCheckedValue()
	emit('remove-tag', node.valueByOption)
}

// 计算当前标签
const calculatePresentTags = () => {
	if (!multiple.value) return
	const nodes = checkedNodes.value
	const tags: Tag[] = []
	const allTags: Tag[] = []
	nodes.forEach((node) => allTags.push(genTag(node)))
	allPresentTags.value = allTags
	if (nodes.length) {
		const [first, ...rest] = nodes
		const restCount = rest.length
		tags.push(genTag(first))
		if (restCount) {
			if (cascadeProps.collapseTags) {
				tags.push({
					key: -1,
					text: `+ ${restCount}`,
					closable: false,
					isCollapseTag: true
				})
			} else {
				rest.forEach((node) => tags.push(genTag(node)))
			}
		}
	}
	presentTags.value = tags
}

const change = () => {
	emit('change', store.current)
}

/**
 * 点击清空按钮
 * */
const handleClear = () => {
	panel.value?.clearCheckedNodes()
	togglePopperVisible(false)
	emit('change', [])
}

/**
 * 搜索是否选中
 * */
const isChecked = (value: Array<string | number>) => {
	//多选
	if (
		multiple.value &&
		store.current.length &&
		Array.isArray(store.current[0])
	) {
		let index = store.current.findIndex((item: Array<string | number>) => {
			return item.join() == value.join()
		})
		if (index > -1) {
			return 'is-active-path'
		} else {
			return ''
		}
	} else {
		if (value.join() == store.current.join()) {
			return 'is-active-path'
		} else {
			return ''
		}
	}
}

/**
 * 搜索
 * */

function isPromise(obj: any) {
	return (
		!!obj &&
		(typeof obj === 'object' || typeof obj === 'function') &&
		typeof obj?.then === 'function'
	)
}

let autocomplete = ref<any>(null)
const handleFilter = (query: string, callback: Resolve) => {
	if (!query) return

	let calculateSuggestions = () => {
		// 服务端搜索
		if (cascadeProps.props.lazySearch) {
			cascadeProps.props.lazySearch(query, (list: any) => {
				callback(list!)
				if (!list || !list.length) store.isSearchEmpty = true
			})
		} else {
			// 前端搜索
			const { showAllLevels, separator } = cascadeProps
			const list = panel.value
				?.getFlattedNodes(!cascadeProps.props.checkStrictly)
				?.filter((node: CascaderNode) => {
					if (node.isDisabled) return false
					node.calcText(showAllLevels, separator)
					return node.text.includes(query)
				})
				?.map((node: CascaderNode) => {
					return {
						[cascadeProps.props.label || 'label']: node.pathLabels,
						[cascadeProps.props.value || 'value']: node.pathValues
					}
				})
			console.log('前端搜索', list)
			callback(list!)
			if (!list || !list.length) store.isSearchEmpty = true
		}

		if (multiple.value) {
			presentTags.value.forEach((tag) => {
				tag.hitState = false
			})
			allPresentTags.value.forEach((tag) => {
				tag.hitState = false
			})
		}
		updatePopperPosition()
	}

	const passed = cascadeProps.beforeFilter(query)
	if (isPromise(passed)) {
		;(passed as Promise<any>).then(calculateSuggestions).catch(() => {
			/* 防止日志打印错误 */
		})
	} else if (passed !== false) {
		calculateSuggestions()
	} else {
		// 折叠建议列表
		autocomplete.value?.blur()
		autocomplete.value?.close()
	}
}

/**
 * 选中搜索下拉搜索项
 * */

const handleSuggestionClick = (item: any) => {
	let nodeIndex = panel.value
		?.getFlattedNodes(!cascadeProps.props.checkStrictly)
		?.findIndex((node: CascaderNode) => {
			if (node.isDisabled) return false
			return (
				node.pathValues.join() ==
				item[cascadeProps.props.value || 'value'].join()
			)
		})
	let node = panel.value
		?.getFlattedNodes(!cascadeProps.props.checkStrictly)
		?.find((node: CascaderNode) => {
			if (node.isDisabled) return false
			return (
				node.pathValues.join() ==
				item[cascadeProps.props.value || 'value'].join()
			)
		})
	console.log('nodeIndex', nodeIndex)
	console.log('node', node)
	if (nodeIndex) {
		let node2 = panel.value?.getFlattedNodes(
			!cascadeProps.props.checkStrictly
		)?.[nodeIndex]
		console.log(node2 === node)
	}
	if (!node) {
		return
	}
	const { checked } = node
	if (multiple.value) {
		console.log('选中搜索下拉搜索项', node, checked)
		panel.value?.handleCheckChange(node, true, false)
		store.panelKey++
	} else {
		!checked && panel.value?.handleCheckChange(node, true, false)
		togglePopperVisible(false)
	}
	store.keyword = ''
}

// 勾选项发生变化或者禁用状态发生变化时，重新计算当前标签
watch([checkedNodes, isDisabled], calculatePresentTags)

const popperPaneRef = computed(() => {
	return tooltipRef.value?.popperRef?.contentRef
})
const popperVisible = ref(false)
const togglePopperVisible = (visible?: boolean) => {
	if (isDisabled.value) return
	visible = visible ?? !popperVisible.value
	if (visible !== popperVisible.value) {
		popperVisible.value = visible
		if (visible) {
			updatePopperPosition()
			nextTick(panel.value?.scrollToExpandingNode)
		}
		emit('visible-change', visible)
	}
}

const handleExpandChange = (value: CascaderValue) => {
	updatePopperPosition()
	emit('expand-change', value)
}

const updatePopperPosition = () => {
	nextTick(() => {
		const popperComponent = unref(tooltipRef.value?.popperRef)
		if (popperComponent) {
			popperComponent.popperInstanceRef?.update()
		}
	})
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgLazyCascade',
	inheritAttrs: false
})
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
