<!--
@name: jlg-date-picker
@description: 对el-date-picker 二次封装,用于选择或输入日期
@author: yqb
@time: 2022/10/28 22:06
-->
<template>
	<component
		:is="isFormItemComponent ? ElFormItem : 'div'"
		class="jlg-form-item"
		:class="['jlg-form-item', { input: !isFormItemComponent }, props.class]"
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
		<el-date-picker
			ref="epRef"
			class="jlg-date-picker"
			v-model="inputValue"
			:disabled="props.disabled"
			:format="valueFormat"
			:value-format="attrs.type !== 'week' ? valueFormat : ''"
			:disabled-date="disabledDate"
			v-bind="$attrs"
		>
			<template #[slotItem] v-for="slotItem in slots">
				<slot :name="slotItem" />
			</template>
		</el-date-picker>
	</component>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ElDatePicker, ElFormItem } from 'element-plus'
import { computed, inject, ref, useSlots, useAttrs, watch } from 'vue'
import { datePickerEmits, datePickerProps } from './datePicker'
import { formItemRef, resetField, clearValidate } from '../../hooks/useFormItem'
import useInjectModel from '../../hooks/useInjectModel'
import { useRules } from '../../hooks/useValidate'

let props = defineProps(datePickerProps)
let emit = defineEmits(datePickerEmits)

let injectModel = inject<any>('model', null)

let inputValue = computed({
	get() {
		// 优先级：modelValue > props.prop > props.startRange&&props.endRange
		if (props.modelValue) {
			return props.modelValue
		}
		if (props.prop && injectModel) {
			return useInjectModel(injectModel, props).getInjectModelField()
		}
		if (props.startRange && props.endRange) {
			return [props.startRange, props.endRange]
		}
		return null
	},
	set(newValue) {
		if (props.prop && injectModel) {
			useInjectModel(injectModel, props).setInjectModelField(newValue)
		}
		if (
			Array.isArray(newValue) &&
			attrs.type &&
			(attrs.type as string).includes('range')
		) {
			emit('update:startRange', newValue[0] ? newValue[0] : null)
			emit('update:endRange', newValue[1] ? newValue[1] : null)
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

let slots = Object.keys(useSlots())

//todo: [Component] [date-picker] type="week", format和value-format同时存在时显示错误 #9231 链接:  https://github.com/element-plus/element-plus/issues/9231
// #9715 链接: https://github.com/element-plus/element-plus/pull/9715
const attrs = useAttrs()
let valueFormat = computed(() => {
	switch (attrs.type) {
		case 'year':
			return 'YYYY'
		case 'month':
		case 'monthrange':
			return 'YYYY/MM'
		case 'date':
		case 'dates':
		case 'daterange':
			return 'YYYY/MM/DD'
		case 'datetime':
		case 'datetimerange':
			return 'YYYY/MM/DD HH:mm:ss'
		case 'week':
			return 'YYYY[年第]ww[周]'
		default:
			return 'YYYY/MM/DD'
	}
})

// 禁用日期通过 disabledDate 设置，传入函数
let disabledDate = (time: Date) => {
	const minTimestamp = +new Date(props.min as number)
	const maxTimestamp = +new Date(props.max as number)
	return (
		(!!maxTimestamp && time.getTime() > maxTimestamp) ||
		(!!minTimestamp && time.getTime() < minTimestamp)
	)
}

watch([() => props.min, () => props.max], ([min, max]) => {
	const minTimestamp = +new Date(min as number)
	const maxTimestamp = +new Date(max as number)
	// 范围选择
	if (Array.isArray(inputValue.value) && inputValue.value.length === 2) {
		let starTime = inputValue.value[0] ? +new Date(inputValue.value[0]) : 0
		let endTime = inputValue.value[1] ? +new Date(inputValue.value[1]) : 0
		// 如果开始时间小于 props.min 或者 结束时间 大于 props.max 时，强制清空
		if (
			(!!starTime && starTime < minTimestamp) ||
			(!!endTime && endTime > maxTimestamp)
		) {
			inputValue.value = null
			// 输入错误信息，用于开发人员调试
			console.error(
				'【jlg-date-picker】值已清空，因为开始时间不能小于 props.min 并且 结束时间 不能大于 props.max'
			)
		}
	} else {
		const timestamp = inputValue.value
			? +new Date(inputValue.value as string | number | Date)
			: 0
		if (!!timestamp && timestamp) {
			timestamp < minTimestamp ? (inputValue.value = null) : null
			timestamp > maxTimestamp ? (inputValue.value = null) : null
		}
	}
	// 更新 disabledDate 函数
	disabledDate = (time: Date) => {
		return (
			(!!maxTimestamp && time.getTime() > maxTimestamp) ||
			(!!minTimestamp && time.getTime() < minTimestamp)
		)
	}
})

let epRef = ref()
defineExpose({
	resetField,
	clearValidate,
	epRef
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgDatePicker',
	inheritAttrs: false
})
</script>

<style scoped></style>
