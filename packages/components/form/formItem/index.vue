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
		<!-- 默认插槽 -->
		<slot />
	</el-form-item>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ElFormItem } from 'element-plus';
import {
	formItemRef,
	resetField,
	clearValidate
} from '../../../hooks/useFormItem';
import { useRules } from '../../../hooks/useValidate';
import { computed } from 'vue';
import { itemEmits, itemProps } from '../../../hooks/itemType';

let formItemBind = computed(() => {
	return {
		...props.formItemConfig,
		label: props.label,
		prop: props.prop
	};
});

let props = defineProps(itemProps);
let emit = defineEmits(itemEmits);

defineExpose({
	resetField,
	clearValidate
});
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'JlgFormItem'
})
</script>

<style lang="less" scoped></style>
