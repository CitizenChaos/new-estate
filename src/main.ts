import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import { setupElementPlus } from '@/plugins/elementPlus'
import '@/common/common.scss'
import '@/common/elementUI.scss'
import '@/theme/theme.scss'

const app = createApp(App)

// 注册ElementPlus
setupElementPlus(app)
// 注册vuex
setupStore(app)
// 注册路由
setupRouter(app)

router.isReady().then(() => {
  app.mount('#app')
})
