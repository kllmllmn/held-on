import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import { staticRoutes } from './modules/staticRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes],
})

export default router
