import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import i18n from './language/i18n.js'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
