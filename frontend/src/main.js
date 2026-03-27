import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import '@material-symbols/font-400/outlined.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
