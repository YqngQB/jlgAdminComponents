import type { App } from 'vue'
import Layout from './components/layout/index.vue'
export * from './components/layout/index.vue'

import Form from './components/form/index.vue'
export * from './components/form/index.vue'

import Autocomplete from './components/autocomplete/index.vue'
export * from './components/autocomplete/index.vue'

import DatePicker from './components/datePicker/index.vue'
export * from './components/datePicker/index.vue'

import Input from './components/input/index.vue'
export * from './components/input/index.vue'

import NumberInput from './components/numberInput/index.vue'
export * from './components/numberInput/index.vue'

const components = [Layout, Form, Autocomplete, DatePicker, Input, NumberInput]

export const JlgLayout = Object.assign(Layout, {
	install: function (app: App) {
		app.component(Layout.name, Layout)
	}
})

export const JlgInput = Object.assign(Input, {
	install: function (app: App) {
		app.component(Input.name, Input)
	}
})

const jlgAdminComponents = (app: App) => {
	components.forEach((com) => {
		app.component(com.name, com)
	})
}

export default jlgAdminComponents
