import Vue from 'vue'
import App from './App.vue'
import VideoPlugin from './plugins/VideoPlugin'
import BrandVideoPlugin from './plugins/BrandVideoPlugin'
import { store } from './store'
import VueCrontab from 'vue-crontab'


Vue.config.productionTip = false
Vue.use(VideoPlugin);
Vue.use(BrandVideoPlugin);
Vue.use(VueCrontab);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
