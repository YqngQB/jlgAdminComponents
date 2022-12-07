<!--
@name: jlg-number-input
@description: 对el-input 二次封装,数字输入框，仅允许输入标准的数字值，可定义精度与范围
@author: yqb
@time: 2022/11/04 13:40
-->
<template>
	<el-form-item
		class="jlg-form-item"
		:class="props.class"
		:style="props.style"
		ref="formItemRef"
		v-bind="formItemBind"
		:rules="useRules(props.rules)"
	>
		<!-- Form Item 插槽 -->
		<template #label="{ label }">
			<slot name="label" :label="label" />
		</template>
		<template #error="{ error }">
			<slot name="error" :error="error" />
		</template>
		<el-input
			ref="epRef"
			class="jlg-number-input"
			v-model.trim="inputValue"
			:placeholder="placeholderText"
			:disabled="props.disabled"
			@input="handleInputEvent"
			@change="handleInputChange"
			v-bind="$attrs"
			:show-password="false"
			type="text"
		>
			<template #[slotItem] v-for="slotItem in getFullSlots">
				<slot :name="slotItem">
					{{ props[slotItem + 'Text'] }}
				</slot>
			</template>
		</el-input>
	</el-form-item>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ElFormItem } from 'element-plus'
import { computed, inject, ref, useSlots, useAttrs } from 'vue'
import { numberInputEmits, numberInputProps } from './inputNumber'
import { formItemRef, resetField, clearValidate } from '../../hooks/useFormItem'
import useInjectModel from '../../hooks/useInjectModel'
import { useRules } from '../../hooks/useValidate'
import { isNil, isUndefined } from '../../hooks/helper'

let props = defineProps(numberInputProps)
let emit = defineEmits(numberInputEmits)

let injectModel = inject<any>('model', null)

let epRef = ref()

let inputValue = computed({
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

const handleInputEvent = (inputEvent: string | number) => {
	if (epRef.value && typeof epRef.value.input.value === 'string') {
    // 一键清空时，value为''
		let num = inputEvent === '' ? inputEvent : epRef.value.input.value
		let n = String(num)
		const t = n.charAt(0)
		// 先把非数字的都替换掉，除了数字和.
		n = n.replace(/[^\d.]/g, '')
		// 必须保证第一个为数字而不是.
		n = n.replace(/^\./g, '')
		// 保证只有出现一个.而没有多个.
		n = n.replace(/\.{2,}/g, '.')
		// 保证.只出现一次，而不能出现两次以上
		n = n.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
		// 如果第一位是负号，则允许添加
		if (t === '-') {
			n = '-' + n
		}
		inputValue.value = epRef.value.input.value = n
	}
  emit('input', inputValue.value)
}

const handleInputChange = (value: string | number) => {
	if (value === '' || value === '-') {
		inputValue.value = null
		emit('change', null)
		return
	}
	inputValue.value = verifyValue(value)
	emit('change', inputValue.value)
}
const verifyValue = (
	value: number | string | null | undefined
): number | null | undefined => {
	const { max, min, precision } = props
	let newVal: number | undefined = Number(value)
	if (isNil(value) || Number.isNaN(newVal)) {
		return null
	}
	if (!isUndefined(precision)) {
		newVal = toPrecision(newVal, precision)
	}
	if (newVal > max || newVal < min) {
		newVal = newVal > max ? max : min
	}
	return newVal
}

const toPrecision = (num: number, pre: number) => {
	if (pre === 0) return Math.round(num)
	let numStr = String(num)
	const pointPos = numStr.indexOf('.')
	if (pointPos === -1) return num
	const nums = numStr.replace('.', '').split('')
	const datum = nums[pointPos + pre]
	if (!datum) return num
	const length = numStr.length
	// toFixed 可能存在精度丢失问题，因为 toFixed() 方法使用的不是数学中的四舍五入，而是银行家舍入法（四舍六入五取偶）
	if (numStr.charAt(length - 1) === '5') {
		numStr = `${numStr.slice(0, Math.max(0, length - 1))}6`
	}
	return Number.parseFloat(Number(numStr).toFixed(pre))
}

let formItemBind = computed(() => {
	return {
		...props.formItemConfig,
		label: props.label,
		prop: props.prop
	}
})

// 在原有插槽基础上扩展,简单文本不必要使用插槽
let getFullSlots = computed(() => {
	let fullSlots = ['prepend', 'append', 'prefix', 'suffix']
	return fullSlots.filter((item) => {
		let key = (item + 'Text') as keyof typeof props
		return props[key] || Object.keys(useSlots()).indexOf(item) > -1
	})
})

const attrs = useAttrs()
let placeholderText = computed(() => {
	if (!props.disabled) {
		let maxLength = attrs['maxLength'] || attrs['maxlength']
		let maxlengthText = maxLength ? `最大可输入${maxLength}个数字` : null
		return props.placeholder
			? props.placeholder
			: maxlengthText || '请输入' + props.label
	} else {
		return null
	}
})

defineExpose({
	resetField,
	clearValidate,
	epRef
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgNumberInput',
	inheritAttrs: false
})
</script>

<style scoped></style>
