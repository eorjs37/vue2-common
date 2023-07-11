import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
const routes = [
  {
    path: '/', component: () => import('@/layout/mainLayout.vue'), children: [
      {
        path: '/video',
        component: () => import('@/views/mainLayout/video.vue')
      },
      {
        path: '/mixin',
        component: () => import('@/views/mainLayout/mixin.vue')
      },
      {
        path: '/transition',
        component: () => import('@/views/mainLayout/transition.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
