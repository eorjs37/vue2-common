import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueCrontab from 'vue-crontab'
import { router } from './router'
import Plugins from './plugins/Plugins'

// Importing the global css file
import "@/assets/styles/_variables.css"
import "@/assets/styles/reset.css"
import "@/assets/styles/global.css"
import "@/assets/styles/common.css"
import 'animate.css';

Vue.config.productionTip = false
Vue.use(VueCrontab);
Vue.use(Plugins)
Vue.use(router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
