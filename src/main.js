import Vue from 'vue'
import App from './App.vue'
import VideoPlugin from './plugins/VideoPlugin'
import { store } from './store'

Vue.config.productionTip = false
Vue.use(VideoPlugin);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
