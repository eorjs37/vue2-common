import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    redirect: '/main',
    children: [
      {
        path: '/main',
        component: () => import('@/views/MainLayout/MainView.vue')
      }
    ]
  },
  {
    path: '/sub1',
    component: () => import('@/layout/Sub1Layout.vue'),
    redirect: '/sub1',
    children: [
      {
        path: '/sub1',
        component: () => import('@/views/Sub1Layout/Sub1View.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
