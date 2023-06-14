import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// import Login from '@/views/login/index'

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: () => import('@/views/login/index.vue') }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
