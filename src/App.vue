<template>
	<div>
		<el-button type="primary" @click="openModal(1)">打开弹窗</el-button>
		<el-button type="primary" @click="openModal(2)">打开弹窗2</el-button>
		<el-button type="primary" @click="openModal(3)">打开弹窗3</el-button>
		<el-button type="primary" @click="$jdm.closeAll()">删除所有</el-button>
		<modals-container ref="modalsContainer" />
		<jlg-table
			ref="table"
			:check-box="false"
			v-model:data="tableInfo.data"
			v-model:columns="tableInfo.fieldList"
			:handle="tableInfo.handle"
			:is-pagination="true"
		></jlg-table>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { JlgLayoutInstance } from 'jlg-admin-components'
import type { JlgFormInstance } from '../packages'
import {
	$jdm,
	ModalsContainer
} from '../packages/components/dynamicModal/modalInstance'
import ModalDemo from '../src/views/modal_a/index.vue'

import JlgTable from '../packages/components/table/index.vue'
import { ElMessageBox } from 'element-plus'
let layoutRef = ref<JlgLayoutInstance>()
let formRef = ref<JlgFormInstance>()
formRef.value?.submit().then((res) => {
	console.log(res)
})

let formData = ref({
	name: 'jlg',
	age: 18
})

const tableInfo = reactive({
	data: [],
	fieldList: [
		{
			title: '通用名',
			field: 'drugName'
		},
		{
			title: '详细包装规格',
			field: 'packageStandard'
		},
		{
			title: '制剂特点',
			field: 'features'
		},
		{
			title: '单位',
			field: 'packageUnit'
		},
		{
			title: '件装',
			field: 'wholePackage'
		},
		{
			title: '生产企业',
			field: 'manufacturer',
			minWidth: 140
		},
		{
			title: '上市许可持有人',
			field: 'holder',
			minWidth: 140
		}
	],
	handle: {}
})

const openModal = (id: number) => {
	$jdm.show({
		name: 'modal' + id,
		component: ModalDemo,
		bind: {
			title: '弹窗' + id,
			width: '40%',
			beforeCloseMethod: () => {
				return new Promise((resolve) => {
					if (id !== 2) {
						resolve(true)
						return
					}
					ElMessageBox.confirm('确定要关闭弹窗2吗？', '提示', {
						confirmButtonText: 'yes',
						cancelButtonText: 'no',
						type: 'warning'
					})
						.then(() => {
							resolve(true)
						})
						.catch(() => {
							resolve(new Error())
						})
				})
			}
		},
		on: {
			customEvent: (data: string) => {
				debugger
				console.log(data)
			},
			hide: () => {
				console.log('hide')
			},
			close: (data: string | null) => {
				debugger
				console.log('close', data)
			}
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
