import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import about from './mod/about'
import { App } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  ...about
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
}

export default router
