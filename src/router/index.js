import VueRouter from "vue-router";
import Vue from "vue";
import nestedRoute from "@/layout/nestedRoute.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/layout/mainLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/mainLayout/homeView.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/mainLayout/videoView.vue')
      },
      {
        path: '/mixin',
        name: 'mixin',
        component: () => import('@/views/mainLayout/mixinView.vue')
      },
      {
        path: '/transition',
        name: 'transition',
        component: () => import('@/views/mainLayout/transitionView.vue')
      },
      {
        path: '/canvas',
        name: 'canvas',
        component: () => import('@/views/mainLayout/canvasView.vue')
      },
      {
        path: '/car',
        name: 'carpurpose',
        component: () => import("@/views/mainLayout/carPurposeView.vue")
      }
    ],
  },
  {
    path: '/nested',
    component: nestedRoute
  },
  {
    path: '/dummy',
    name: "DummyLayout",
    component: () => import("@/layout/dummyLayout.vue")
  },
  {
    path: '/aplayz',
    component: () => import('@/layout/layout4Layout.vue'),
    redirect: '/player',
    children: [
      {
        path: '/player',
        name: 'playerws',
        component: () => import("@/views/layout4Layout/playerView.vue"),
        meta: { viewName: "마이스페이스", isUseMenu: true }
      },
      {
        path: '/dummyview',
        name: "dummyview",
        component: () => import("@/views/layout4Layout/dummyView.vue"),
        meta: { viewName: "더미", isUseMenu: true }
      },
      {
        path: '/event',
        name: "eventview",
        component: () => import("@/views/layout4Layout/eventView.vue"),
        meta: { viewName: "이벤트", isUseMenu: true }
      }
    ]
  },
  {
    path: '/main',
    component: () => import('@/layout/loginLayout.vue'),
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'mainView',
        component: () => import("@/views/loginLayout/mainView.vue"),
        meta: { viewName: "마이스페이스" }
      },
      {
        path: '/space',
        name: 'spaceView',
        component: () => import("@/views/loginLayout/spaceView.vue"),
        meta: { viewName: "스페이스등록" }
      },
      {
        path: '/playerview',
        name: "playerView",
        component: () => import("@/views/loginLayout/playerView.vue"),
        meta: { viewName: "플레이어" }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
