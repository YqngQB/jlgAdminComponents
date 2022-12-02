import type { App } from 'vue'
import Layout from './components/layout/index.vue'
export * from './components/layout/index.vue'

const components = [Layout]
export const jlgAdminComponents = Object.assign(Layout, {
	install: function (app: App) {
		components.forEach((item) => {
			app.component(item.name, item)
		})
	}
})

export default jlgAdminComponents
