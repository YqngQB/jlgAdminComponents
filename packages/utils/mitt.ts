import type { Emitter } from 'mitt'
import type { ComponentOptions } from 'vue'
import mitt from 'mitt'

type Events = {
	setDynamicModals: Array<ComponentOptions>
}

export const emitter: Emitter<Events> = mitt<Events>()
