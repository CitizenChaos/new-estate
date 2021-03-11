// 公司管理
import { markRaw } from 'vue'
const routeName = 'About'
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

const routes = [
  {
    path: '/about',
    name: routeName,
    component: markRaw(About),
    meta: {
      title: '公司管理'
    },
    children: []
  }
]

export default routes
