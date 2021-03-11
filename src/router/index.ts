import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import mod1 from './mod/about'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  ...mod1
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: any) {
  app.use(router)
  // 创建路由守卫
}

export default router
