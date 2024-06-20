import { createRouter, createMemoryHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export { router }
