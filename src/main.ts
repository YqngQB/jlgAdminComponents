import { createApp } from 'vue'
import app from './App.vue'

import ElementPlus from 'element-plus'
// import jlgAdminComponents from 'jlg-admin-components'
import './index.scss'
import 'element-plus/dist/index.css'

const App = createApp(app)

App.use(ElementPlus)
App.mount('#app')
