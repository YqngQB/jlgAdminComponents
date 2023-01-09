<template>
	<vue-dynamic-modal @hide="handleCustomHide" @close="handleCustomClose">
		modal_a
		<el-button type="primary" @click="openModal(2)">打开弹窗modal_b</el-button>
		<el-button type="primary" @click="handleCustomEvent">
			触发自定义事件
		</el-button>
	</vue-dynamic-modal>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import VueDynamicModal from '../../../packages/components/dynamicModal/jlgDynamicModal.vue'
import { $jdm } from '../../../packages/components/dynamicModal/modalInstance'
import ModalDemo from '../modal_b/index.vue'
let emit = defineEmits(['customEvent', 'close'])
const openModal = (id: number) => {
	$jdm.show({
		name: 'ModalDemo2',
		component: ModalDemo,
		bind: {
			title: 'ModalDemo' + id,
			width: '40%',
			lockView: true,
			beforeHideMethod: () => {
				return new Promise((resolve) => {
					ElMessageBox.confirm('确定要隐藏吗？', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
						.then(() => {
							resolve(true)
						})
						.catch(() => {
							resolve(new Error('取消关闭'))
						})
				})
			}
		},
		on: {
			hide: handleModalHide
		}
	})
}
const handleModalHide = () => {
	debugger
	console.log('handleModalHide:')
}

const handleCustomEvent = () => {
	emit('customEvent', 'wasd')
}
const handleCustomHide = () => {
	console.log('handleCustomHide')
}

const handleCustomClose = () => {
	console.log('handleCustomClose')

	// 自定义传参
	// emit('close','自定义传参')
}
</script>

<style scoped></style>
