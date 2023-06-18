import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import installIcons from '@/icons/index.ts'
import './premission'
const app = createApp(App)
const pinia = createPinia()
app.use(router).use(pinia).use(installIcons).mount('#app')
