import Vue from 'vue'
import App from './App.vue'
import { MyGlobal } from '@/plugins/myPlugin'

Vue.config.productionTip = false

Vue.use(MyGlobal)


new Vue({
  render: h => h(App),
}).$mount('#app')
