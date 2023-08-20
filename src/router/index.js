import VueRouter from "vue-router";
import Vue from "vue";
import nestedRoute from "@/layout/nestedRoute.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/layout/mainLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/mainLayout/homeView.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/mainLayout/videoView.vue')
      },
      {
        path: '/mixin',
        name: 'mixin',
        component: () => import('@/views/mainLayout/mixinView.vue')
      },
      {
        path: '/transition',
        name: 'transition',
        component: () => import('@/views/mainLayout/transitionView.vue')
      },
      {
        path: '/canvas',
        name: 'canvas',
        component: () => import('@/views/mainLayout/canvasView.vue')
      },
      {
        path: '/car',
        name: 'carpurpose',
        component: () => import("@/views/mainLayout/carPurposeView.vue")
      }
    ],
  },
  {
    path: '/nested',
    component: nestedRoute
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
