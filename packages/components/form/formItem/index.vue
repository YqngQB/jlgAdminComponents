<template>
	<el-form-item
		v-bind="$attrs"
		class="jlg-form-item"
		ref="formItemRef"
    :label="props.label"
    :prop="props.prop"
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
import { PropType } from 'vue'
import { ElFormItem } from 'element-plus'
import {
	formItemRef,
	resetField,
	clearValidate
} from '../../../hooks/useFormItem'
import { useRules } from '../../../hooks/useValidate'

let props = defineProps({
	// 标签文本
	label: {
		type: String,
		default: ''
	},
	// model 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。该属性是必填的
	prop: {
		type: [String, Array] as PropType<
			string | Array<string> | null | undefined
		>,
		default: ''
	},
	rules: {
		type: [String, Array] as PropType<Array<string | Record<string, any>>>,
		default: () => {
			return []
		}
	}
})

defineExpose({
	resetField,
	clearValidate
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgFormItem',
	inheritAttrs: false
})
</script>

<style lang="less" scoped></style>
