import { createApp } from 'vue'
import app from './App.vue'

import ElementPlus from 'element-plus'
import Layout from '../packages/index'
import Table from '@pureadmin/table'
import 'animate.css'
import './index.scss'
import 'element-plus/dist/index.css'

const App = createApp(app)

App.use(ElementPlus).use(Layout).use(Table)
App.mount('#app')
