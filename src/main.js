import Vue from 'vue'
import App from './App.vue'
import VideoPlugin from './plugins/VideoPlugin'
import BrandVideoPlugin from './plugins/BrandVideoPlugin'
import { store } from './store'
import VueCrontab from 'vue-crontab'
import { router } from './router'

// Importing the global css file
import "@/assets/styles/_variables.css"
import "@/assets/styles/reset.css"
import "@/assets/styles/global.css"
import 'animate.css';

Vue.config.productionTip = false
Vue.use(VideoPlugin);
Vue.use(BrandVideoPlugin);
Vue.use(VueCrontab);
Vue.use(router)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
