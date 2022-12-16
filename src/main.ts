import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import jlgAdminComponents from 'jlg-admin-components'
import 'jlg-admin-components/dist/style.css'
import Table from 'vxe-table'
import 'vxe-table/lib/style.css'
import './index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(jlgAdminComponents).use(Table)
app.mount('#app')
