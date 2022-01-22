import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerApp } from './global'
import './assets/css/global.css'
import './assets/css/index.less'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { createPinia } from 'pinia'
import { setupStore } from './store'
import { setupTopMenu } from './store/homePageMenu'
import { setupSubMenu } from './store/homeSubMenu'

const app = createApp(App)

app.use(router).use(registerApp).use(createPinia()).mount('#app')

setupStore()
setupTopMenu()
setupSubMenu()
