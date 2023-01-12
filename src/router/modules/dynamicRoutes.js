import { useUserStore } from '@/stores/modules/useUserStore'
import Api from '@/api/modules/login'

export const initDynamicRoutes = async (router) => {
  const userStore = useUserStore()
  const fetchMenuList = async () => {
    const res = await Api.fetchMenuList()
    if (res.success) {
      userStore.setMenuList(res.data)
    }
  }
  await fetchMenuList()

  let dynamicRoutes = {
    path: '/',
    name: 'app',
    component: null,
    redirect: { path: '/home' },
    meta: { title: 'app' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/layout/index.vue'),
        meta: { title: '首页' },
      },
    ],
  }

  router.addRoute(dynamicRoutes)
}
