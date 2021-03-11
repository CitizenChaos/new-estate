import { Router } from 'vue-router'

const setupGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // 处理导航守卫
    if (typeof to.meta.title === 'string' && to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
}

export default setupGuard
