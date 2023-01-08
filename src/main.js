import { createApp } from 'vue'
import pinia from '@/stores'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from '@/router'
import guard from '@/router/guard'
import '@/assets/styles/base.css'
import '@/assets/styles/reset.css'
// import Api from '@/api'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// window['API'] = Api
app.use(ElementPlus)
app.use(router)
app.use(guard, { router })
app.use(pinia)

app.mount('#app')
