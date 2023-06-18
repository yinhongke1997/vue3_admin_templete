import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Login from '@/views/login/index'
const publicRoutes: Array<RouteRecordRaw> = [
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/', component: () => import('@/layout/index.vue') }
]

const router = createRouter({
  routes: publicRoutes,
  history: createWebHistory()
})

export default router
