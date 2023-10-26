import VueRouter from "vue-router";
import Vue from "vue";
import nestedRoute from "@/layout/nestedRoute.vue"
import createListComp from "@/utils/hoc/userListComp";
import { withHoc } from "@/hoc/withHoc";
import ListView from '@/views/hocLayout/listView.vue'
import ListView2 from '@/views/hocLayout/listView2.vue'
import { withCuration } from "@/hoc/withCuration";
import curationView from '@/views/userLayout/curationView.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/hoc',
    name: 'hocLayout',
    component: () => import('@/layout/hocLayout.vue'),
    redirect: '/hoclist1',
    children: [
      {
        path: '/hoclist1',
        name: 'ListView',
        component: withHoc('list', ListView)
      },
      {
        path: '/hoclist2',
        name: 'ListView2',
        component: withHoc('list2', ListView2)
      }
    ]
  },
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
  },
  {
    path: '/dynamic',
    name: "dynamicLayout",
    component: () => import("@/layout/dynamicLayout.vue"),
    redirect: '/dynamicview',
    children: [
      {
        path: '/dynamicview',
        name: 'dynamicview',
        component: () => import('@/views/dynamic/dynamicView.vue')
      },
    ]
  },
  {
    path: '/user',
    name: 'userLayout',
    component: () => import("@/layout/userLayout.vue"),
    redirect: '/user1',
    children: [
      {
        path: "/user1",
        name: "user1view",
        component: () => import("@/views/userLayout/user1View.vue")
      },
      {
        path: "/user2",
        name: "user2view",
        component: createListComp("user2view")
      },
      {
        path: "/user3",
        name: "user3view",
        component: createListComp("user2view")
      },
      {
        path: "/node",
        name: "mediaSessionView",
        component: () => import("@/views/userLayout/mediaSessionView.vue")
      },
      {
        path: "/swiper",
        name: "swiperView",
        component: () => import('@/views/userLayout/swiperView.vue')
      },
      {
        path: "/curation",
        name: "curationView",
        component: withCuration(curationView)
      }
    ]
  },
  {
    path: '/hls',
    name: 'hlsLayout',
    component: () => import("@/layout/hlsLayout.vue"),
    redirect: '/first',
    children: [
      {
        path: '/first',
        name: 'firstPage',
        component: () => import("@/views/hlsLayout/firstPage.vue"),
      },
      {
        path: '/second',
        name: 'secondPage',
        component: () => import("@/views/hlsLayout/secondPage.vue"),
      },
      {
        path: '/socket',
        name: 'playerWebCastingView',
        component: () => import("@/views/hlsLayout/playerWebCastingView.vue")
      },
      {
        path: '/playerWs',
        name: 'PlayerWS',
        component: () => import('@/views/hlsLayout/playerWS.vue')
      }
    ]
  },
  {
    path: '/router',
    name: 'routerLayout',
    component: () => import("@/layout/routerLayout.vue"),
    redirect: '/router1',
    children: [
      {
        path: '/router1',
        name: 'router1View',
        component: () => import("@/views/routerLayout/router1View.vue"),
      },
      {
        path: '/router2',
        name: 'router2View',
        component: () => import("@/views/routerLayout/router2View.vue"),
      },
      {
        path: '/router3',
        name: 'router3View',
        component: () => import("@/views/routerLayout/router3View.vue"),
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
