import type { Emitter } from 'mitt'
import mitt from 'mitt'
import type {UseModalOptionsPrivate} from "../types/dynamicModal";

type Events = {
	setDynamicModals: Array<UseModalOptionsPrivate>
}

export const emitter: Emitter<Events> = mitt<Events>()
