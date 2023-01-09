import type { Emitter } from 'mitt'
import mitt from 'mitt'
import type { UseModalOptionsPrivate } from '../types'
import { ModalKey } from '../types'

type Events = {
	hideAllEmitter: void
	hideEmitter: ModalKey
	closeAllEmitter: void
	setDynamicModals: Array<UseModalOptionsPrivate>
	beforeCloseEmitter: {
		modalKey: ModalKey
		callback: (result: boolean) => void
	}
}

export const emitter: Emitter<Events> = mitt<Events>()
