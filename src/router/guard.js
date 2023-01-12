import { useUserStore } from '@/stores/modules/useUserStore'
import { initDynamicRoutes } from './modules/dynamicRoutes'

// 全局路由守卫
export default {
  install: (app, { router }) => {
    router.beforeEach(async (to, from, next) => {
      const userStore = useUserStore()
      const token = userStore.token
      // console.log(userStore.menuList.length === 0, to.path, token, 'userStore')

      // 1. 路由白名单
      if (to.path === '/login') return next()
      // 2. 如果没有token，跳转登录
      if (!token) {
        console.log(1111)
        return next({ path: '/login', replace: true })
      }
      // 3. 存在token 每次刷新添加动态路由，解决添加动态路由后刷新白屏问题
      if (userStore.menuList.length === 0) {
        console.log(123444)
        await initDynamicRoutes(router)
        return next({ ...to, replace: true })
      }

      // 放行
      next()
    })
  },
}
