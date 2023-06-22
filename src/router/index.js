import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/post/:id',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
