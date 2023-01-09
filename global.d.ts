// GlobalComponents for Volar
import '@vue/runtime-core'
import {JlgDynamicModal, JlgModalsContainer} from "./packages";

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		JlgForm: typeof import('jlg-admin-components')['JlgForm']
		JlgFormItem: typeof import('jlg-admin-components')['JlgFormItem']
		JlgInput: typeof import('jlg-admin-components')['JlgInput']
		JlgLayout: typeof import('jlg-admin-components')['JlgLayout']
		JlgAutocomplete: typeof import('jlg-admin-components')['JlgAutocomplete']
		JlgDatePicker: typeof import('jlg-admin-components')['JlgDatePicker']
		JlgNumberInput: typeof import('jlg-admin-components')['JlgNumberInput']
		JlgLazyCascade: typeof import('jlg-admin-components')['JlgLazyCascade']
	}
}

export { }
