import type { App } from 'vue'
import Layout from './components/layout/index.vue'

export const JlgLayout = Object.assign(Layout, {
	install: function (app: App) {
		app.component(Layout.name, Layout)
	}
})

export default JlgLayout
