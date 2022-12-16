import type { App, Component, ComponentPublicInstance, ComputedRef, Ref } from 'vue'

export type ComponentProps = ComponentPublicInstance['$props']

export type ModalKey = string | symbol

export type UseModalOptionsPrivate<
    ModalProps extends ComponentProps = {},
    DefaultSlotProps extends ComponentProps = {},
    > = {
    name: ModalKey
    id?: symbol
    component?: Component
    modelValue?: boolean
    attrs?: ModalProps
    slots?: {
        default: string | {
            component: Component
            attrs?: DefaultSlotProps
        }
        [key: string]: any
    }

    resolveOpened?: () => void
    resolveClosed?: () => void
}

export type Vdm = {
    install(app: App): void
    modals: ComputedRef<Modal>[]
    openedModals: ComputedRef<Modal>[]
    dynamicModals: UseModalOptionsPrivate[]
    modalsContainers: Ref<symbol[]>
    get: (modalId: ModalKey) => undefined | ComputedRef<Modal>
    toggle: (modalId: ModalKey, show?: boolean) => undefined | Promise<string>
    open: (modalId: ModalKey) => undefined | Promise<string>
    close: (modalId: ModalKey) => undefined | Promise<string>
    closeAll: () => Promise<[PromiseSettledResult<Promise<string>[]>]>
}

export type Modal = {
    modalId?: ModalKey
    hideOverlay: Ref<boolean | undefined> | undefined
    overlayVisible: Ref<boolean>
    focus: () => void
    toggle: (show?: boolean) => Promise<string>
}