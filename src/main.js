import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$cartCount = ref(0)
app.config.globalProperties.$cartId = ref(0)

app.mount('#app')