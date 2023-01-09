import type { App } from 'vue'
export * from './types/index'

import Layout from './components/layout/index.vue'
import Form from './components/form/index.vue'
import Autocomplete from './components/autocomplete/index.vue'
import DatePicker from './components/datePicker/index.vue'
import Input from './components/input/index.vue'
import NumberInput from './components/numberInput/index.vue'
import Select from './components/select/index.vue'
import LazyCascade from './components/lazySelectCascade/index.vue'
import DynamicModal from './components/dynamicModal/jlgDynamicModal.vue'
import ModalsContainer from './components/dynamicModal/JlgModalsContainer.vue'

export * from './components/layout/index.vue'
export const JlgLayout = Object.assign(Layout, {
	install: function (app: App) {
		app.component(Layout.name, Layout)
	}
})

export * from './components/form/index.vue'
export const JlgForm = Object.assign(Form, {
	install: function (app: App) {
		app.component(Form.name, Form)
	}
})

export * from './components/autocomplete/index.vue'
export const JlgAutocomplete = Object.assign(Autocomplete, {
	install: function (app: App) {
		app.component(Autocomplete.name, Autocomplete)
	}
})

export * from './components/datePicker/index.vue'
export const JlgDatePicker = Object.assign(DatePicker, {
	install: function (app: App) {
		app.component(DatePicker.name, DatePicker)
	}
})

export * from './components/input/index.vue'
export const JlgInput = Object.assign(Input, {
	install: function (app: App) {
		app.component(Input.name, Input)
	}
})

export * from './components/numberInput/index.vue'
export const JlgNumberInput = Object.assign(NumberInput, {
	install: function (app: App) {
		app.component(NumberInput.name, NumberInput)
	}
})

export * from './components/numberInput/index.vue'
export const JlgSelect = Object.assign(Select, {
	install: function (app: App) {
		app.component(Select.name, Select)
	}
})

export * from './components/lazySelectCascade/index.vue'
export const JlgLazyCascade = Object.assign(LazyCascade, {
	install: function (app: App) {
		app.component(LazyCascade.name, LazyCascade)
	}
})

export * from './components/dynamicModal/jlgDynamicModal.vue'
export const JlgDynamicModal = Object.assign(DynamicModal, {
	install: function (app: App) {
		app.component(DynamicModal.name, DynamicModal)
	}
})

export * from './components/dynamicModal/jlgDynamicModal.vue'
export const JlgModalsContainer = Object.assign(ModalsContainer, {
	install: function (app: App) {
		app.component(ModalsContainer.name, ModalsContainer)
	}
})

const components = [
	Layout,
	Form,
	Autocomplete,
	DatePicker,
	Input,
	NumberInput,
	Select,
	LazyCascade,
	DynamicModal,
	ModalsContainer
]

const jlgAdminComponents = (app: App) => {
	components.forEach((com) => {
		app.component(com.name, com)
	})
}

export default jlgAdminComponents
