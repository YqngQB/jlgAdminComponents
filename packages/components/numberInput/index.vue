<!--
@name: jlg-input
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
		<jlg-input
			ref="epRef"
			class="jlg-number-input"
			v-model.trim="inputValue"
			v-bind="$attrs"
			type="number"
			@change="handleInputChange"
		>
			<template #[slotItem] v-for="slotItem in Object.keys(slots)">
				<slot :name="slotItem" />
			</template>
		</jlg-input>
	</el-form-item>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ElFormItem } from 'element-plus';
import { computed, inject, ref, useSlots, useAttrs } from 'vue';
import { numberInputEmits, numberInputProps } from './inputNumber';
import JlgInput from '../input/index.vue';
import {
	formItemRef,
	resetField,
	clearValidate
} from '../../hooks/useFormItem';
import useInjectModel from '../../hooks/useInjectModel';
import { useRules } from '../../hooks/useValidate';
import { isNil, isUndefined } from 'lodash';

let props = defineProps(numberInputProps);
let emit = defineEmits(numberInputEmits);

let injectModel = inject<any>('model', null);

let inputValue = computed({
	get() {
		return (
			props.modelValue ||
			(props.prop && injectModel
				? useInjectModel(injectModel, props).getInjectModelField()
				: null)
		);
	},
	set(newValue) {
		if (props.prop && injectModel) {
			useInjectModel(injectModel, props).setInjectModelField(newValue);
		}
		emit('update:modelValue', newValue);
	}
});

const handleInputChange = (value: string | number) => {
	if (value === '') {
		inputValue.value = null;
		emit('change', null);
		return;
	}
  inputValue.value = verifyValue(value);
	emit('change', inputValue.value);
};
const verifyValue = (
	value: number | string | null | undefined
): number | null | undefined => {
	const { max, min, precision } = props;
	let newVal: Number | undefined = Number(value);
	if (isNil(value) || Number.isNaN(newVal)) {
		return null;
	}
	if (!isUndefined(precision)) {
		newVal = toPrecision(newVal, precision);
	}
	if (newVal > max || newVal < min) {
		newVal = newVal > max ? max : min;
	}
	return newVal;
};

const toPrecision = (num: number, pre: number) => {
	if (pre === 0) return Math.round(num);
	let numStr = String(num);
	const pointPos = numStr.indexOf('.');
	if (pointPos === -1) return num;
	const nums = numStr.replace('.', '').split('');
	const datum = nums[pointPos + pre];
	if (!datum) return num;
	const length = numStr.length;
  // toFixed 可能存在精度丢失问题，因为 toFixed() 方法使用的不是数学中的四舍五入，而是银行家舍入法（四舍六入五取偶）
	if (numStr.charAt(length - 1) === '5') {
		numStr = `${numStr.slice(0, Math.max(0, length - 1))}6`;
	}
	return Number.parseFloat(Number(numStr).toFixed(pre));
};

let formItemBind = computed(() => {
	return {
		...props.formItemConfig,
		label: props.label,
		prop: props.prop
	};
});

const slots = useSlots();
const attrs = useAttrs();

let epRef = ref();
defineExpose({
	resetField,
	clearValidate,
	epRef
});
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JlgNumberInput'
})
</script>

<style scoped></style>
