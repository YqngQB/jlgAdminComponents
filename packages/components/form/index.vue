<template>
	<el-form ref="epRef" v-bind="$attrs" :model="props.model">
		<slot />
	</el-form>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { ref, provide } from 'vue'
import { ElForm, ElMessage, FormInstance } from 'element-plus'
import { cloneDeep } from '../../hooks/helper'

let epRef = ref<FormInstance>()
let props = defineProps({
	model: {
		type: Object,
		required: true
	}
})

provide('model', props.model)

/**
 * 表单快速校验与提交
 * @param validateErrorText 校验失败时的提示文本
 */
function submit(validateErrorText = '表单校验失败，请检查您的输入项！') {
	return new Promise((resolve, reject) => {
		epRef.value?.validate((valid, invalidFields) => {
			if (valid) {
				resolve(cloneDeep(props.model))
			} else {
				ElMessage.error(validateErrorText)
				reject(invalidFields)
			}
		})
	})
}

defineExpose({
	submit,
	// 暴露 el-form 原有的方法
	epRef
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'JlgForm',
  inheritAttrs: false
})
</script>

<style lang="less" scoped></style>
