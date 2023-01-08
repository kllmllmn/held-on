import { useUserStore } from '@/stores/modules/useUserStore'

// 全局路由守卫
export default {
  install: (app, { router }) => {
    router.beforeEach((to, from, next) => {
      // 1. 路由白名单
      if ((to.path = '/login')) return next()
      // 2. 如果没有token，跳转登录
      const userStore = useUserStore()
      console.log(userStore, 1119)
      if (!userStore.token) return next('/login')

      // 放行
      next()
    })
  },
}
