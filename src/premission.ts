import router from '@/router/index'
import { useUserLogin } from '@/store/login'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  //pinia下的模块必须在路由导航守卫里创建，不然会报错。
  const store = useUserLogin()
  if (store.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
