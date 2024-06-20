import { createApp } from 'vue'
import App from './App.vue'
// import { store } from './store'
import { router } from './router'
import VueCookies from 'vue-cookies'
// Importing the global css file
import './assets/styles/reset.css'
import './assets/styles/common.css'
import 'animate.css'

//Plugins
import { videoplayer } from './utils/videoplayer'

//carousel-3d
import Carousel3d from 'vue-carousel-3d'

//Plugins

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

//globalcomponent
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
// 쿠키를 사용한다.
app.use(VueCookies)
//쿠키의 만료일은 7일이다. (글로벌 세팅)
app.$cookies.config('7d')

app.use(Carousel3d)

app.config.globalProperties.$VideoPlayer = videoplayer
app.mount('#app')

export { app }
