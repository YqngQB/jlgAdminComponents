<template>
	<div class="modals-container">
		<component
			v-for="(modal,index) in dynamicModals"
			:is="modal.component"
			:key="modal?.name || index"
			:id="modal.id"
      :name="modal.name"
			v-bind="modal.bind || {}"
      v-on="modal.on || {}"
      v-model="modal.modelValue"
		/>
		<el-popover
			v-if="dynamicModals.length > 0"
			popper-class="minimize-popper-container"
			placement="left"
			title="最小化窗体栏"
			width="280"
			trigger="click"
		>
			<ul class="minimize-modal-list" style="height: auto">
				<li
					v-for="(modal, index) in dynamicModals"
					:key="modal.id"
					class="modal-item"
					@dblclick="restoreModal(index, modal)"
				>
					<p class="g-text-overflow-hidden" :title="modal?.bind?.title">
						{{ modal?.bind?.title }}
					</p>
					<p>
						<i
							style="display: inline-block"
							class="vxe-modal--zoom-btn trigger--btn vxe-icon-maximize"
							title="还原"
							@click="restoreModal(index, modal)"
						/>
						<i
							style="display: inline-block; margin-left: 10px"
							class="vxe-modal--close-btn trigger--btn vxe-icon-close"
							title="关闭"
							@click="close(modal.id)"
						/>
					</p>
				</li>
			</ul>
			<template #reference>
				<el-badge
					type="primary"
					class="el-badge"
					style="right: 50px; bottom: 120px; position: fixed; z-index: 2999"
					:value="dynamicModals?.length ?? 0"
				>
					<el-button circle>
						<i class="trigger--btn vxe-icon-menu" />
					</el-button>
				</el-badge>
			</template>
		</el-popover>
	</div>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { emitter } from '../../utils/mitt'
import { ref } from 'vue'
import type { UseModalOptionsPrivate } from '../../types/dynamicModal'
import { $jdm } from "./modalInstance";
import { ModalKey } from "../../types/dynamicModal";

let dynamicModals = ref([] as UseModalOptionsPrivate[])
emitter.on('setDynamicModals', (list: Array<UseModalOptionsPrivate>) => {
	dynamicModals.value = list
})

function close(id: ModalKey) {
  $jdm.close(id)
}
function restoreModal(index:number, modal: UseModalOptionsPrivate) {
	modal.modelValue = true
}
</script>

<script lang="ts">
export default {
	name: 'JlgModalsContainer'
}
</script>

<style lang="scss">
.minimize-popper-container {
	padding: 0px !important;

	.el-popover__title {
		height: 30px;
		background-color: #f8f8f8;
		position: relative;
		padding: 0px 9px;
		line-height: 30px;
		color: #333;
	}

	.minimize-modal-list {
		padding: 0px 9px;

		.g-text-overflow-hidden {
			width: 180px;
		}

		.modal-item {
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 6px 0;
			padding: 1px 9px;
			box-shadow: -1px 0px 5px rgb(0 0 0 / 20%);
			border: 1px solid #c1c3c8;
			border-radius: 5px;
			background-color: #f9f9f9;
			cursor: pointer;

			&:hover {
				background-color: #f6f6f6;
			}
		}
	}
}
</style>
