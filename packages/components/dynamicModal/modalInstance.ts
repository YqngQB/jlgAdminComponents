import VueDynamicModalComponent from './VueDynamicModal.vue'
import ModalsContainerComponent from './ModalsContainerComponent.vue'
import { markRaw, reactive, nextTick, shallowReactive } from 'vue'
import type { Component, ComponentOptions } from 'vue'
import type { UseModalOptionsPrivate, ModalKey } from '../../types/dynamicModal'
import { emitter } from '../../utils/mitt'

export class ModalInstance {
	readonly VueDynamicModal: Component
	private dynamicModals: Array<UseModalOptionsPrivate>
	public ModalsContainer: ComponentOptions
	constructor() {
		const bindApi = (component: ComponentOptions) => {
			return markRaw(component)
		}

		this.VueDynamicModal = bindApi(VueDynamicModalComponent)

		this.dynamicModals = reactive([])
		this.ModalsContainer = bindApi(ModalsContainerComponent)
	}
	/**
	 *  @description 打开modal
	 */
	show(modal: UseModalOptionsPrivate) {
		if (typeof modal === 'object') {
			const { show } = this.useModal(modal)
			return show()
		}
	}

	/**
	 *  @description 根据name,关闭指定的modal
	 */
	close(modalKey: ModalKey) {
		const index = this.dynamicModals.findIndex(
			(modal: UseModalOptionsPrivate) => {
				let key = typeof modalKey === 'string' ? 'name' : 'id'
				return modalKey === modal[key]
			}
		)
		if (index !== -1) {
			this.dynamicModals.splice(index, 1)
		}
	}
	/**
	 * @description 将所有打开的modal 最小化
	 */
	hideAll() {
		debugger
		let names = this.dynamicModals.map((modal) => modal.name) as ModalKey[]
		return this.hide(...names)
	}
	/**
	 * @description 销毁所有modal
	 */
	closeAll() {
		this.dynamicModals = []
		emitter.emit('setDynamicModals', this.dynamicModals)
	}

	open(...names: ModalKey[]) {
		return this.toggle(names, true)
	}

	hide(...names: Array<ModalKey>) {
		return this.toggle(names, false)
	}

	/**
	 * @description 切换modal的显示状态
	 */
	toggle(name: ModalKey | ModalKey[], isShow: boolean) {
		const modals = Array.isArray(name) ? this.get(...name) : this.get(name)
		return Promise.allSettled(
			modals.map((modal) => (modal.modelValue = isShow))
		)
	}

	get(...names: ModalKey[]) {
		return this.dynamicModals.filter((modal) => names.includes(modal.name))
	}

	/**
	 * @description 判断modal是否已经存在
	 */
	existModal(options: UseModalOptionsPrivate) {
		return this.dynamicModals.findIndex(
			(vm: UseModalOptionsPrivate) => vm.name === options.name
		)
	}
	/**
	 * @description 创建modal
	 */
	useModal(_options: UseModalOptionsPrivate) {
		if (!_options.name) {
			_options.name = _options?.component?.name || 'VueDynamicModal'
		}
		const options = shallowReactive({
			modelValue: false,
			component: this.VueDynamicModal,
			id: Symbol('modal'),
			attrs: {},
			..._options
		})

		const show = () => {
			if (this.existModal(options) !== -1) {
				const index = this.existModal(options)
				this.dynamicModals.splice(index, 1)
				options.modelValue = true
				// 原modal删除之后，再重新添加一个新的modal
				nextTick(() => {
					this.dynamicModals.push(options)
				}).then((_) =>
					console.info(
						'[Vue Dynamic Modal] 存在同名modal，已经删除原modal，重新添加一个新的modal！'
					)
				)
			} else {
				options.modelValue = true
				this.dynamicModals.push(options)
				emitter.emit('setDynamicModals', this.dynamicModals)
			}
		}

		return { show, options }
	}
}

const createModalInstance = () => {
	const modalInstance = new ModalInstance()
	return {
		$vdm: modalInstance,
		VueDynamicModal: modalInstance.VueDynamicModal,
		ModalsContainer: modalInstance.ModalsContainer,
		useModal: modalInstance.useModal.bind(modalInstance)
	}
}

export const { $vdm, VueDynamicModal, ModalsContainer, useModal } =
	createModalInstance()
