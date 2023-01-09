import { markRaw, reactive, nextTick, shallowReactive } from 'vue'
import JlgDynamicModalComponent from './jlgDynamicModal.vue'
import JlgModalsContainerComponent from './JlgModalsContainer.vue'
import type { Component } from 'vue'
import type { UseModalOptionsPrivate, ModalKey } from '../../types'
import { emitter } from '../../utils/mitt'

export class ModalInstance {
	readonly JlgDynamicModal: Component
	private readonly dynamicModals: Array<UseModalOptionsPrivate>
	public ModalsContainer: Component
	constructor() {
		const bindApi = (component: Component) => {
			return markRaw(component)
		}
		this.JlgDynamicModal = bindApi(JlgDynamicModalComponent)

		this.dynamicModals = reactive([])
		this.ModalsContainer = bindApi(JlgModalsContainerComponent)
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
			emitter.emit('beforeCloseEmitter', {
				modalKey: modalKey,
				callback: (result) => {
					if (result) {
						this.dynamicModals.splice(index, 1)
					}
				}
			})
		}
	}
	/**
	 * @description 将所有打开的modal 最小化
	 */
	hideAll() {
		let names = this.dynamicModals.map((modal) => modal.name) as ModalKey[]
		return this.hide(...names)
	}
	/**
	 * @description 销毁所有modal,不会触发beforeCloseMethod
	 */
	closeAll() {
		this.dynamicModals.splice(0, this.dynamicModals.length)
		emitter.emit('setDynamicModals', this.dynamicModals)
		emitter.emit('closeAllEmitter')
	}

	open(...names: ModalKey[]) {
		return this.toggle(names, true)
	}

	hide(...names: Array<ModalKey>) {
		if (Array.isArray(names)) {
			emitter.emit('hideAllEmitter')
		} else {
			emitter.emit('hideEmitter', names)
		}
		return this.toggle(names, false)
	}

	/**
	 * @description 切换modal的显示状态
	 */
	toggle(name: ModalKey | ModalKey[], isShow: boolean) {
		const modals = Array.isArray(name) ? this.get(...name) : this.get(name)
		return Promise.allSettled(
			modals.map((modal) => {
				// 【fix】: 修复设置modal的beforeHideMethod属性后，只触发第一次的bug
				modal.modelValue = true
				nextTick(() => {
					modal.modelValue = isShow
				}).then((r) => r)
			})
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
			_options.name = _options?.component?.name || 'JlgDynamicModal'
		}
		const options = shallowReactive({
			modelValue: false,
			component: this.JlgDynamicModal,
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
					console.warn(
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
		$jdm: modalInstance,
		JlgDynamicModal: modalInstance.JlgDynamicModal,
		JlgModalsContainer: modalInstance.ModalsContainer,
		useModal: modalInstance.useModal.bind(modalInstance)
	}
}

export const { $jdm, JlgDynamicModal, JlgModalsContainer } =
	createModalInstance()
