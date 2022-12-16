<template>
	<div>
		<el-button type="primary" @click="openModal(1)">打开弹窗</el-button>
		<el-button type="primary" @click="openModal(2)">打开弹窗2</el-button>
		<el-button type="primary" @click="openModal(3)">打开弹窗3</el-button>
		<el-button type="primary" @click="$vdm.closeAll()">删除所有</el-button>
		<modals-container ref="modalsContainer" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { JlgLayoutInstance } from 'jlg-admin-components'
import type { JlgFormInstance } from '../packages'
import {
	$vdm,
	ModalsContainer
} from '../packages/components/dynamicModal/modalInstance'
let layoutRef = ref<JlgLayoutInstance>()
let formRef = ref<JlgFormInstance>()
formRef.value?.submit().then((res) => {
	console.log(res)
})

let formData = ref({
	name: 'jlg',
	age: 18
})

const openModal = (id: number) => {
	$vdm.show({
		name: 'modal' + id,
		attrs: {
			title: '弹窗' + id,
			width: '40%'
		}
	})
}
</script>

<style lang="scss">
.scrollbar-wrapper {
	height: calc(100% - 60px);
}
.layout-container-demo .el-header {
	position: relative;
	background-color: var(--el-color-primary-light-7);
}
.layout-container-demo .el-aside {
	background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
	border-right: none;
}
.layout-container-demo .el-main {
	padding: 0;
}
.layout-container-demo .el-footer {
	background: #366695;
}
</style>
