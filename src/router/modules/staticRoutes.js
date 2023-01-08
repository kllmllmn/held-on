export const staticRoutes = [
  {
    path: '/',
    name: 'app',
    component: null,
    redirect: { path: '/login' },
    meta: { title: 'app' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页' },
  },
]
