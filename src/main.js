import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import i18n from './language/i18n.js'
import vue3videoPlay from "vue3-video-play" // 引入组件
import "vue3-video-play/dist/style.css" // 引入css

const app = createApp(App)

app.use(i18n)
app.use(vue3videoPlay)
app.use(router)
app.mount('#app')
