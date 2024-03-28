import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = []

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
