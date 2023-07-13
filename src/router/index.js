import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
const routes = [
  {
    path: '/', component: () => import('@/layout/mainLayout.vue'), redirect: '/mixin', children: [
      {
        path: '/video',
        component: () => import('@/views/mainLayout/videoView.vue')
      },
      {
        path: '/mixin',
        component: () => import('@/views/mainLayout/mixinView.vue')
      },
      {
        path: '/transition',
        component: () => import('@/views/mainLayout/transitionView.vue')
      },
      {
        path: '/canvas',
        component: () => import('@/views/mainLayout/canvasView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
