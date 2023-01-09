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
		type="modal"
		v-bind="$attrs"
		:destroy-on-close="false"
		@show="emit('show')"
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
				:content="maximizeOrSquare === 'vxe-icon-maximize' ? '还原' : '最大化'"
				placement="bottom"
			>
				<i
					v-if="showZoom"
					:class="['vxe-modal--zoom-btn', 'trigger--btn', maximizeOrSquare]"
					@click="zoom"
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
			<slot />
		</template>
		<template #footer>
			<slot name="footer">
				<template
					v-for="(item, index) in props.footerConfig?.buttons || []"
					:key="index"
				>
					<el-button v-bind="item" @click="handleClickEvent(item)">
						{{ item.label }}
					</el-button>
				</template>
			</slot>
		</template>
	</vxe-modal>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, useAttrs } from 'vue'
import XEUtils from 'xe-utils'
import { $jdm } from './modalInstance'
import { emitter } from '../../utils/mitt'
import type { VxeModalInstance } from 'vxe-table'
import type {
	ModalKey,
	JlgModalFooterConfig,
	JlgModalFooterButtons
} from '../../types'

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
	confirmButtonText: { type: String, default: '保存' },
	cancelButtonText: { type: String, default: '关闭' },
	footerConfig: {
		type: Object as PropType<JlgModalFooterConfig>,
		default: {
			buttons: [
				{
					label: '关闭',
					type: 'default',
					size: 'small',
					event: 'close'
				},
				{
					label: '保存',
					type: 'primary',
					size: 'small',
					event: 'save'
				}
			]
		}
	},
	beforeCloseMethod: Function as PropType<() => Promise<any>>
})

let emit = defineEmits(['show', 'hide', 'close', 'submit'])

emitter.on('hideEmitter', (name) => {
	if (name === props.name) {
		emit('hide')
	}
})
emitter.on('hideAllEmitter', () => {
	emit('hide')
})
emitter.on('closeAllEmitter', () => {
	emit('close')
})

/**
 * 弹窗关闭前触发
 * */
emitter.on('beforeCloseEmitter', ({ modalKey, callback }) => {
	let key = typeof modalKey === 'string' ? 'name' : 'id'
	if (modalKey !== props[key]) {
		callback(false)
		return
	}

	let beforeCloseMethod = props.beforeCloseMethod
	if (!beforeCloseMethod) {
		callback(true)
		emit('close')
		return
	}

	Promise.resolve(beforeCloseMethod()).then((rest) => {
		if (!XEUtils.isError(rest)) {
			emit('close')
		}
		callback(!XEUtils.isError(rest))
	})
})

let attrs = useAttrs()

let modalRef = ref<VxeModalInstance>()

let maximizeOrSquare = computed(() => {
	return modalRef.value?.isMaximized() ? 'vxe-icon-maximize' : 'vxe-icon-square'
})

/**
 * 隐藏当前弹窗（不会销毁）
 */
function hide() {
	$jdm.hide(props.name as ModalKey)
}

/**
 * 关闭当前弹窗（销毁）
 */
function close() {
	$jdm.close(props.id as ModalKey)
}
function handleClickEvent(data: JlgModalFooterButtons) {
	let { event } = data
	switch (event) {
		case 'close':
			close()
			break
		default:
			emit('submit', data)
			break
	}
}

function zoom() {
	modalRef.value?.zoom()
}
function getBox() {
	return modalRef.value?.getBox()
}
defineExpose({
	hide,
	close,
	zoom,
	getBox
})
</script>

<script lang="ts">
export default {
	name: 'JlgDynamicModal',
	inheritAttrs: false
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
