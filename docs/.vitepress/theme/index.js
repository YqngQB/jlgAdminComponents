import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './styles/index.css'
import JlgForm from '../../../packages/components/form/index.vue'
import JlgFormItem from '../../../packages/components/form/formItem/index.vue'
import JlgLayout from '../../../packages/components/layout/index.vue'
import JlgInput from '../../../packages/components/input/index.vue'
import JlgNumberInput from '../../../packages/components/numberInput/index.vue'
import JlgAutocomplete from '../../../packages/components/autocomplete/index.vue'
import JlgDatePicker from '../../../packages/components/datePicker/index.vue'

export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx)
		useComponents(ctx.app)
		ctx.app.use(ElementPlus)
		ctx.app.component(JlgForm.name, JlgForm)
		ctx.app.component(JlgFormItem.name, JlgFormItem)
		ctx.app.component(JlgLayout.name, JlgLayout)
		ctx.app.component(JlgInput.name, JlgInput)
		ctx.app.component(JlgNumberInput.name, JlgNumberInput)
		ctx.app.component(JlgAutocomplete.name, JlgAutocomplete)
		ctx.app.component(JlgDatePicker.name, JlgDatePicker)
	}
}
