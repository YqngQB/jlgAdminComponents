import { ref } from 'vue'
import type { FormItemInstance } from 'element-plus'
export const formItemRef = ref<FormItemInstance>()

// 对该表单项进行重置，将其值重置为初始值并移除校验结果
export function resetField() {
	formItemRef.value?.resetField()
}

// 移除该表单项的校验结果
export function clearValidate() {
	formItemRef.value?.clearValidate()
}
