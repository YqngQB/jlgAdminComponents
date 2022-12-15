import VueDynamicModalComponent from './VueDynamicModal.vue'
import ModalsContainerComponent from './ModalsContainerComponent.vue'
import { markRaw, shallowReactive } from 'vue'
import type { Component, ComponentOptions } from 'vue'

export class ModalInstance {
	private modals: ComponentOptions[]
	private openedModals: ComponentOptions[]
	readonly VueDynamicModal: ComponentOptions
	private dynamicModals: Array<ComponentOptions>
	public ModalsContainer: any
	constructor() {
		const bindApi = (component: ComponentOptions) => {
			return markRaw(component)
		}

		this.modals = []
		this.openedModals = []
		this.VueDynamicModal = bindApi(VueDynamicModalComponent)

		this.dynamicModals = shallowReactive([])
		this.ModalsContainer = bindApi(ModalsContainerComponent)
	}

	show(modal: ComponentOptions) {
		if(typeof modal === 'object') {
			const { show } = this.useModal(modal)
			return show()
		}
	}

	open(...names: string[]) {
		return this.toggle(names, true)
	}

	hide(...names: string[]) {
		return this.toggle(names, false)
	}

	// 根据name,关闭指定的modal
	close(name: string) {
		const index = this.dynamicModals.findIndex((modal: ComponentOptions) => {
			if (name === modal.props.name) {
				modal.hide && modal.hide()
				return true
			}
		})
		this.dynamicModals.splice(index, 1)
	}

	hideAll() {
		return this.hide(...this.openedModals.map((modal) => modal.props.name))
	}

	closeAll() {
		if (this.modals.length > 0) {
			this.modals[0].closeAll()
		}
	}

	toggle(name: string | string[], ...args: unknown[]) {
		const modals = Array.isArray(name) ? this.get(...name) : this.get(name)
		return Promise.allSettled(modals.map((modal) => modal.toggle(...args)))
	}

	get(...names: string[]) {
		return this.modals.filter((modal) => names.includes(modal.props.name))
	}

	existModal(options: ComponentOptions) {
		return this.dynamicModals.findIndex((vm:Component) => vm.name === options.name)
	}

	useModal(_options: ComponentOptions) {
		const options = shallowReactive({
			value: false,
			component: this.VueDynamicModal,
			id: Symbol('useModal'),
			bind: {},
			slots: {},
			on: {},
			..._options
		})
		options.name =
			window.location.hash.replace(/[/\\.\s]/g, '_') + '_' + _options.name

		const show = () => {
			if (this.existModal(options) !== -1) {
				new Promise((resolve) => {
					const index = this.existModal(options)
					this.dynamicModals.splice(index, 1)
					options.value = true
					// 这里添加定时器是为了让原modal删除之后，再重新添加一个新的modal
					setTimeout(() => {
						this.dynamicModals.push(options)
					}, 0)
					console.info(
						'[Vue Dynamic Modal] 原Modal 已存在, 已删除原Modal并重新打开'
					)
					resolve('[Vue Dynamic Modal] 原Modal 已存在, 已删除原Modal并重新打开')
				}).then((_) => {})
			} else {
				return new Promise((resolve) => {
					options.value = true
					this.dynamicModals.push(options)
					resolve('show')
				})
			}
		}

		const hide = () => {
			return this.existModal(options) !== -1
				? new Promise((resolve) => {
						options.value = false
						resolve('hide')
				  })
				: Promise.resolve('[Vue Dynamic Modal] Modal 已经关闭')
		}

		return { show, hide, options }
	}
}

/**
 * @description 支持创建多个模态实例
 */
export const createModalInstance = () => {
	const modalInstance = new ModalInstance()
	return {
		$vdm: modalInstance,
		VueDynamicModal: modalInstance.VueDynamicModal,
		ModalsContainer: modalInstance.ModalsContainer,
		useModal: modalInstance.useModal.bind(modalInstance)
	}
}

const modalInstance = createModalInstance()

export const { $vdm, VueDynamicModal, ModalsContainer, useModal } =
	modalInstance
