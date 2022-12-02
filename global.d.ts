// GlobalComponents for Volar
declare module 'vue' {
	export interface GlobalComponents {
		PureTable: typeof import('@pureadmin/table')['PureTable']
	}
}

export {}
