import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import(`@/layout/MainLayout.vue`),
    redirect: '/main',
    children: [
      {
        path: '/main',
        component: () => import(`@/views/MainLayout/MainView.vue`)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
