import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import VueCookies from 'vue3-cookies'
// Importing the global css file
import './assets/styles/reset.css'
import './assets/styles/common.css'
import 'animate.css'
//Plugins
import { videoplayer } from './utils/videoplayer'
import { cronTab } from './utils/cronTab'
//carousel-3d
import Carousel3d from 'vue-carousel-3d'
//vue awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faSpinner } from '@fortawesome/free-solid-svg-icons'
import i18n from './locales/i18n'
/* add icons to the library */
library.add(faUserSecret, faSpinner)
/* add font awesome icon component */

//globalcomponent
const app = createApp(App)


//crontab init
cronTab.init()

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
//쿠키의 만료일은 7일이다. (글로벌 세팅)
//app.$cookies.config('7d')
app.use(VueCookies, {
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
})
app.use(Carousel3d)
app.use(store)
app.use(i18n)
app.config.globalProperties.$VideoPlayer = videoplayer
app.config.globalProperties.$crontab = cronTab
app.mount('#app')

export { app }
