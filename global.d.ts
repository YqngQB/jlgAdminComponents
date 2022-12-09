// GlobalComponents for Volar
declare module 'vue' {
	export interface GlobalComponents {
		JlgForm: typeof import('jlg-admin-components')['JlgForm'],
		JlgFormItem: typeof import('jlg-admin-components')['JlgFormItem'],
		JlgInput: typeof import('jlg-admin-components')['JlgInput'],
		JlgLayout: typeof import('jlg-admin-components')['JlgLayout'],
		JlgAutocomplete: typeof import('jlg-admin-components')['JlgAutocomplete'],
	}
}

export {}
