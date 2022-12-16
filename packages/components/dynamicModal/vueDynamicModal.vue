<template>
	<vxe-modal
		ref="modalRef"
		:resize="resize"
		:width="width"
		:height="height"
		:min-width="minWidth"
		:min-height="minHeight"
		:mask="mask"
		:lock-view="lockView"
		:showHeader="showHeader"
		:show-footer="showFooter"
		:show-zoom="showZoom"
		type="modal"
		v-bind="$attrs"
		:destroy-on-close="false"
		class="scrollBar"
	>
		<template #header>
			<span class="vxe-modal--title">{{ title }}</span>
			<el-tooltip
				class="box-item"
				effect="dark"
				content="最小化"
				placement="bottom"
			>
				<i
					class="vxe-modal--minus-btn trigger--btn vxe-icon-minus"
					@click="hide"
				/>
			</el-tooltip>
			<el-tooltip
				class="box-item"
				effect="dark"
				:content="
					$refs.modalRef && $refs.modalRef.isMaximized() ? '还原' : '最大化'
				"
				placement="bottom"
			>
				<i
					:class="[
						'vxe-modal--zoom-btn',
						'trigger--btn',
						$refs.modalRef && $refs.modalRef.isMaximized()
							? 'vxe-icon-maximize'
							: 'vxe-icon-square'
					]"
					@click="$refs.modalRef.zoom()"
				/>
			</el-tooltip>
			<el-tooltip
				class="box-item"
				effect="dark"
				content="关闭"
				placement="bottom"
			>
				<i
					class="vxe-modal--close-btn trigger--btn vxe-icon-close"
					@click="close"
				/>
			</el-tooltip>
		</template>
		<template #default>
			<div>
				<pre>attrs:{{ attrs }}</pre>
				____________
				<pre>props:{{ props }}</pre>
			</div>
		</template>
		<template #footer>
			<slot name="footer" :close="() => close()">
				<div>footer</div>
			</slot>
		</template>
	</vxe-modal>
</template>

<script lang="ts" setup>
import { PropType, ref, computed, useAttrs } from 'vue'
import { $vdm } from './modalInstance'
import type { VxeModalInstance } from 'vxe-table'
import type { ModalKey } from '../../types/dynamicModal'

let props = defineProps({
	slots: {
		type: Object as PropType<Record<string, any>>,
		default: () => ({})
	},
  id: Symbol,
	title: String,
	data: Object,
	formKitData: Object,
	// 设置唯一的 name, 可用于手动关闭或打开指定的 Modal。
	name: String,
	type: { type: String, default: 'add' },
	anchorPointNavigation: { type: Boolean, default: true },
	collapseList: { type: Array, default: () => [] },
	resize: { type: Boolean, default: true },
	mask: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	lockView: { type: Boolean, default: false },
	showFooter: { type: Boolean, default: true },
	showHeader: { type: Boolean, default: true },
	showZoom: { type: Boolean, default: true },
	width: { type: [Number, String], default: 1200 },
	height: [Number, String],
	minWidth: { type: [Number, String], default: 650 },
	minHeight: { type: [Number, String], default: 300 },
	maxWidth: { type: [Number, String], default: Infinity },
	maxHeight: { type: [Number, String], default: Infinity },
	confirmText: { type: String, default: '保存' },
	cancelText: { type: String, default: '关闭' }
})

let emits = defineEmits(['show', 'hide', 'close'])

let attrs = useAttrs()

let modalRef = ref<VxeModalInstance>()

/**
 *  关闭当前弹窗（不会销毁）
 */
const hide = () => {
	modalRef.value.close()
}

/**
 * 关闭当前弹窗（会销毁）
 */
const close = () => {
  console.log('close',props)
	$vdm.close(props.id as ModalKey)
}
</script>

<script lang="ts">
export default {
	name: 'VueDynamicModal',
	// inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.vxe-modal--title {
	height: 3em;
	line-height: 3em;
	padding-left: 1em;
}

.vxe-modal--minus-btn {
	position: absolute;
	right: 74px;
	top: 0.85em;
	z-index: 1;
	cursor: pointer;

	&:hover {
		color: #1890ff;
	}
}

.vxe-modal--zoom-btn {
	position: absolute;
	right: 44px;
	top: 0.85em;
	z-index: 1;
	cursor: pointer;

	&:hover {
		color: #1890ff;
	}
}

.vxe-modal--close-btn {
	position: absolute;
	right: 14px;
	top: 0.85em;
	z-index: 1;
	cursor: pointer;

	&:hover {
		color: #1890ff;
	}
}
</style>
