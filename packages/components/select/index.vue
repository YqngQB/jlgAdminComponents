<!--
@name: jlg-select
@description: 集成 el-select 与 el-select-v2并结合实际业务二次封装
@author: yqb
@time: 2022/11/03 14:30
-->
<template>
	<component
		:is="isFormItemComponent ? ElFormItem : 'div'"
		:class="[
			'jlg-form-item',
			{
				[props.isVirtualized ? 'el-select-v2' : 'el-select']:
					!isFormItemComponent
			},
			props.class
		]"
		:style="props.style"
		ref="formItemRef"
		v-bind="isFormItemComponent ? formItemBind : undefined"
		:rules="isFormItemComponent ? useRules(props.rules) : undefined"
	>
		<!-- Form Item 插槽 -->
		<template #label="{ label }">
			<slot name="label" :label="label" />
		</template>
		<template #error="{ error }">
			<slot name="error" :error="error" />
		</template>
		<component
			ref="epRef"
			v-model="inputValue"
			:is="props.isVirtualized ? ElSelectV2 : ElSelect"
			:key="props.isVirtualized ? 'ElSelectV2' : 'ElSelect'"
			:options="props.isVirtualized ? props.options : undefined"
			:class="props.isVirtualized ? 'jlg-select-v2' : 'jlg-select'"
			:value-key="props.optionKey"
			:filterable="props.filterable"
			:remote="props.remote"
			:disabled="props.disabled"
			collapse-tags
			collapse-tags-tooltip
			:placeholder="placeholderText"
			v-bind="$attrs"
			@change="handleChange"
		>
			<!--   传递 ElSelectV2 虚拟插槽   -->
			<template #default="{ item }" v-if="props.isVirtualized">
				<slot name="default" :item="item">
					<span>{{ item[props.labelKey] }}</span>
				</slot>
			</template>
			<template v-if="!props.isVirtualized">
				<!--    Option Group 组件    -->
				<template v-if="props.options && props.groupKey">
					<el-option-group
						v-for="(groupItem, index) in props.options"
						:key="index"
						:label="groupItem[props.labelKey]"
					>
						<el-option
							v-for="(item, index) in groupItem[props.groupKey]"
							:key="index"
							:label="item[props.labelKey]"
							:value="item[props.valueKey]"
							:disabled="item.disabled"
						>
							<!--   封装 ElSelect Item 插槽,自定义 Option 模板  -->
							<slot name="default" :item="item" />
						</el-option>
					</el-option-group>
				</template>
				<!--    Option 组件    -->
				<el-option
					v-else
					v-for="(item, index) in props.options"
					:key="index"
					:label="item[props.labelKey]"
					:value="item[props.valueKey]"
					:disabled="item.disabled"
				>
					<!--   封装 ElSelect Item 插槽,自定义 Option 模板  -->
					<slot name="default" :item="item" />
				</el-option>
			</template>
		</component>
	</component>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import {
	ElFormItem,
	ElOption,
	ElOptionGroup,
	ElSelect,
	ElSelectV2
} from 'element-plus'

import { computed, ref, inject, useSlots, watchPostEffect } from 'vue'
import { selectEmits, selectProps } from './select'
import useInjectModel from '../../hooks/useInjectModel'
import { useRules } from '../../hooks/useValidate'
import { formItemRef, resetField, clearValidate } from '../../hooks/useFormItem'
import { ICurrentOption } from '../../types'
import { cloneDeep } from '../../utils/helper'

let props = defineProps(selectProps)
let emit = defineEmits(selectEmits)
const slots = useSlots()
let injectModel = inject<any>('model', null)
let inputValue = computed<valueType | Array<valueType>>({
	get() {
		return (
			props.modelValue ||
			(props.prop && injectModel
				? useInjectModel(injectModel, props).getInjectModelField()
				: null)
		)
	},
	set(newValue) {
		if (props.prop && injectModel) {
			useInjectModel(injectModel, props).setInjectModelField(newValue)
		}
		emit('update:modelValue', newValue)
	}
})
let formItemBind = computed(() => {
	return {
		...props.formItemConfig,
		label: props.label,
		prop: props.prop
	}
})

let isFormItemComponent = computed(() => {
	if (props.notFormItemWrapped) {
		return false
	}
	return props.prop && injectModel
})

/**
 * 劫持 change 事件，传递额外参数
 * @param value 当前选中的值
 * */
type valueType = string | number | boolean | object
let currentOption = ref<ICurrentOption>()
function handleChange(value: valueType | Array<valueType>, noEvent?: boolean) {
	currentOption.value = null
	if (props.groupKey) {
		// 数据分组
		currentOption.value = props.options
			?.map((item) => item[props.groupKey])
			.flat()
			.find((item) => item[props.valueKey] === value)
	} else if (Array.isArray(value)) {
		// 多选
		currentOption.value = value.map((item) => {
			return (
				(props.options as Array<Record<string, any>>)?.find(
					(option) =>
						(option[props.valueKey] ?? option[props.labelKey]) === item
				) || null
			)
		})
	} else {
		currentOption.value =
			(props.options as Array<Record<string, any>>)?.find(
				(option) => option[props.valueKey] === value
			) || null
	}
	// 分发 change 事件
	!noEvent ? emit('change', value, currentOption.value, props.options) : null
}
// 初始化后设置 currentOption
const stop = watchPostEffect(() => {
	if (inputValue.value && props.options?.length) {
		handleChange(inputValue.value, true)
		stop()
	}
})

let isFunction = (fn: any) => typeof fn === 'function'
//  初始化自动调用接口，获取options 数据
if (
	props.autoDispatchMethod &&
	isFunction(props.autoDispatchMethod) &&
	!props.remote
) {
	props.autoDispatchMethod().then(<T = unknown>(res: T) => {
		if (props.beforeAssignOptions && isFunction(props.beforeAssignOptions)) {
			let { selectOptions = [], defaultValue = null } =
				props.beforeAssignOptions(res) || {}
			// 如果接口返回的数据中有默认值，则设置默认值
			if (defaultValue) {
				inputValue.value = defaultValue
        currentOption.value = cloneDeep(defaultValue)
				// 设置默认值后触发的事件，defaultValue 为默认值；currentOption 为当前选中的 option，options 为所有下拉选项
				emit(
					'defaultValueChange',
					defaultValue,
					currentOption.value,
					selectOptions
				)
			}
			emit('update:options', selectOptions)
		} else {
			console.error('【jlg-select】 缺少 beforeAssignOptions 方法')
		}
	})
}
// 处理占位符
let placeholderText = computed(() => {
	if (!props.disabled) {
		let isFilterable = props['filterable'] || props['remote']
		let maxlengthText = isFilterable ? '输入关键字进行搜索' : null
		return props.placeholder
			? props.placeholder
			: maxlengthText || '请选择' + props.label
	} else {
		return null
	}
})
let epRef = ref()
defineExpose({
	resetField,
	clearValidate,
	epRef,
	currentOption
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgSelect',
	inheritAttrs: false
})
</script>

<style lang="scss">
.jlg-select-v2 {
	width: 100%;
}
</style>
