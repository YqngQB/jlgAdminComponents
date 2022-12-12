import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import jlgAdminComponents from '../dist/index'
import Table from 'vxe-table'
import './index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(jlgAdminComponents).use(Table)
app.mount('#app')
