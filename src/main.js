import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueCrontab from 'vue-crontab'
import { router } from './router'
import Plugins from './plugins/Plugins'
import VueCookies from "vue-cookies";
// Importing the global css file
import "@/assets/styles/_variables.css"
import "@/assets/styles/reset.css"
import "@/assets/styles/global.css"
import "@/assets/styles/common.css"
import 'animate.css';

//global Component
import LoadingComponent from '@/components/LoadingComponent.vue'

Vue.config.productionTip = false
Vue.use(VueCrontab);
Vue.use(Plugins)
Vue.use(router)
//쿠키를 사용한다.
Vue.use(VueCookies);
//쿠키의 만료일은 7일이다. (글로벌 세팅)
Vue.$cookies.config("7d");

//globalcomponent
Vue.component('LoadingComponent', LoadingComponent)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
