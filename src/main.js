import {createApp} from 'vue'
import '@/style.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import App from '@/App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
const app = createApp(App)
app.use(router).use(createPinia())
app.mount('#app')
