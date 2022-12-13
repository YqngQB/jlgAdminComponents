<!--
@name: jlg-autocomplete
@description: 自动补全输入框
@author: yqb
@time: 2022/11/01 09:57
-->
<template>
	<component
      :is="isFormItemComponent ? ElFormItem : 'div'"
      class="jlg-form-item"
      :class="['jlg-form-item', { autocomplete: !isFormItemComponent }, props.class]"
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
		<el-autocomplete
			ref="epRef"
			class="jlg-autocomplete"
			v-model="inputValue"
			:disabled="props.disabled"
			:placeholder="placeholderText"
			v-bind="$attrs"
		>
			<template #[slotItem] v-for="slotItem in getFullSlots">
				<slot :name="slotItem">
					{{ props[slotItem + 'Text'] }}
				</slot>
			</template>
		</el-autocomplete>
	</component>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ref, computed, inject, useSlots } from 'vue';
import { ElAutocomplete, ElFormItem } from 'element-plus';
import { autocompleteEmits, autocompleteProps } from './autocomplete';
import useInjectModel from '../../hooks/useInjectModel';
import {
	formItemRef,
	resetField,
	clearValidate
} from '../../hooks/useFormItem';
import { useRules } from '../../hooks/useValidate';

let props = defineProps(autocompleteProps);
let emit = defineEmits(autocompleteEmits);

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

let placeholderText = computed(() => {
	return !props.disabled ? props.placeholder || '请输入' + props.label : null;
});

// 在原有插槽基础上扩展,简单文本不必要使用插槽
let getFullSlots = computed(() => {
	let fullSlots = ['prepend', 'append', 'prefix', 'suffix'];
	return fullSlots.filter((item) => {
		let key = (item + 'Text') as keyof typeof props;
		return props[key] || Object.keys(useSlots()).indexOf(item) > -1;
	});
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
  name: 'JlgAutocomplete',
  inheritAttrs: false
})
</script>

<style lang="less" scoped></style>
