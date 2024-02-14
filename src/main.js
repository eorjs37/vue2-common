import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueCrontab from 'vue-crontab'
import { router } from './router'
import Plugins from './plugins/Plugins'
import VueCookies from 'vue-cookies'
// Importing the global css file
import '@/assets/styles/_variables.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'
import '@/assets/styles/common.css'
import 'animate.css'

//vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//Sentry
import '@/utils/sentry/sentry'

//carousel-3d
import Carousel3d from 'vue-carousel-3d'

//vue awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faSpinner } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faSpinner)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

//global Component
import LoadingComponent from '@/components/LoadingComponent.vue'

Vue.config.productionTip = false
Vue.use(VueCrontab)
Vue.use(Plugins)
Vue.use(router)
//쿠키를 사용한다.
Vue.use(VueCookies)
//쿠키의 만료일은 7일이다. (글로벌 세팅)
Vue.$cookies.config('7d')

Vue.use(Carousel3d)

//globalcomponent
Vue.component('LoadingComponent', LoadingComponent)
Vue.use(Vuetify)
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
