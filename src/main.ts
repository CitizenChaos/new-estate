import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import { setupElementPlus } from '@/plugins/elementPlus'

const app = createApp(App)

setupElementPlus(app)

setupStore(app)

app.use(router).mount('#app')
