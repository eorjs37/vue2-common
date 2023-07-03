import Vue from 'vue'
import App from './App.vue'
import VideoPlugin from './plugins/VideoPlugin'

Vue.config.productionTip = false

Vue.use(VideoPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
