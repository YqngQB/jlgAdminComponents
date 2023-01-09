<template>
	<jlg-dynamic-modal ref="modal" @hide="handleModalHide">
		modal_b
		<el-button type="primary" @click="handleCloseEvent">关闭</el-button>
	</jlg-dynamic-modal>
</template>

<script lang="ts" setup>
import { JlgDynamicModal } from 'jlg-admin-components'
import { ref } from 'vue'
import { JlgDynamicModalInstance } from '../../../packages'
const handleModalHide = () => {
	console.log('触发了hide')
}
let modal = ref<JlgDynamicModalInstance>()
const handleCloseEvent = () => {
	modal.value?.close()
}
</script>

<style scoped></style>
