import { App, VNode } from 'vue'

export type SizeType = null | 'medium' | 'small' | 'mini'
export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T]

export type JLGComponent<P = {}, E = {}> = {
	new (): {
		$props: P & E
	}
} & {
	install(app: App): void
}

export interface RecordInfo {
	[key: string]: any
}

export interface JlgEvent {
	$event: Event
	[key: string]: any
}

export type VNodeStyle = {
	[key: string]: string | number
}

export type SlotVNodeType = JSX.Element | VNode | string | number
