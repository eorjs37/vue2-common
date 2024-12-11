import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/main2',
    component: () => import('@/layout/MainLayout.vue'),
    redirect: '/main2',
    children: [
      {
        path: '/main',
        component: () => import('@/views/MainLayout/MainView.vue')
      },
      {
        path: '/main2',
        component: () => import('@/views/MainLayout/AccordionView.vue')
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
  },
  {
    path: '/hoc',
    component: () => import('@/layout/HocLayout.vue'),
    children: [
      {
        path: '/hoc',
        component: () => import('@/views/HocLayout/HocView.vue')
      }
    ]
  },
  {
    path: '/todo',
    component: () => import('@/layout/TodoLayout.vue'),
    redirect: '/todolist',
    children: [
      {
        path: '/todolist',
        component: () => import('@/views/TodoLayout/TodoListView.vue')
      }
    ]
  },
  {
    path: '/',
		component: () => import('@/layout/HlsLayout.vue'),
		redirect: '/hls',
    children: [
      {
        path: '/hls',
        component: () => import('@/views/HlsLayout/HlsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/layout/LoginLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('@/views/LoginLayout/LoginView.vue')
      }
    ]
	},
	{
		path: '/snapshot',
		component: () => import('@/layout/SnapShotLayout.vue'),
		children: [
			{
				path: '/snapshot',
				component:()=> import('@/views/SnapShotLayout/SnapShotView.vue')
			}
		]
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
