<!--
@name: jlg-input
@description: 对el-input 二次封装
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
		<el-input
			ref="epRef"
			class="jlg-input"
			v-model.trim="inputValue"
			:disabled="props.disabled"
			:placeholder="placeholderText"
			v-bind="$attrs"
		>
			<template #[slotItem] v-for="slotItem in getFullSlots">
				<slot :name="slotItem">
					{{ props[slotItem + 'Text'] }}
				</slot>
			</template>
		</el-input>
	</component>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ElInput, ElFormItem } from 'element-plus';
import { computed, inject, ref, useSlots, useAttrs } from 'vue';
import { inputEmits, inputProps } from './input';
import {
	formItemRef,
	resetField,
	clearValidate
} from '../../hooks/useFormItem';
import useInjectModel from '../../hooks/useInjectModel';
import { useRules } from '../../hooks/useValidate';

let props = defineProps(inputProps);
let emit = defineEmits(inputEmits);

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

let formItemBind = computed(() => {
	return {
		...props.formItemConfig,
		label: props.label,
		prop: props.prop
	};
});

let isFormItemComponent = computed(() => {
  if (props.notFormItemWrapped) {
    return false
  }
  return props.prop && injectModel
})

// 在原有插槽基础上扩展,简单文本不必要使用插槽
let getFullSlots = computed(() => {
	let fullSlots = ['prepend', 'append', 'prefix', 'suffix'];
	return fullSlots.filter((item) => {
		let key = (item + 'Text') as keyof typeof props;
		return props[key] || Object.keys(useSlots()).indexOf(item) > -1;
	});
});

// 占位符
const attrs = useAttrs();
let placeholderText = computed(() => {
	if (!props.disabled) {
		let maxLength = attrs['maxLength'] || attrs['maxlength'];
		let maxlengthText = maxLength ? `最大可输入${maxLength}个字符` : null;
		return props.placeholder
			? props.placeholder
			: maxlengthText || '请输入' + props.label;
	} else {
		return null;
	}
});

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
  name: 'JlgInput',
  inheritAttrs: false
})
</script>

<style lang="scss">
.jlg-form-item.input {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
}
</style>
