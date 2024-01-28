# vue2-editorconfig

## video 공통 기능 리스트
* ~~Hls 초기화(ios/safari같은 경우 video에 세팅)~~
* ~~자동재생(retry Count 3)~~
* ~~소리 조금씩 줄이기~~
* ~~CronTab 사용~~
* ~~store 재생상태 연동~~
* ~~음원 교체(광고 음악)~~
* ~~소리 조금씩 줄이기~~
* ~~차량용 음원처리~~
* cronTab 공통 처리 필요
* ~~Hls 에러 처리(MEDIA ERROR,NETWORK ERROR)~~
* 자동재생(예약된 시간에 음원 on/off)

## vue - plugins
> 자주 쓰는 기능들 또는 공통의 기능들을 사용해줄 수 있도록 해주는 기능  Video에 관한 기능들을 Plugins으로 생성.

```javascript
/* VideoPlugin.js */
import { videoObject } from "@/utils/video"
export default {
  install(Vue) {
    Vue.prototype.$VideoJS = videoObject
  }
}
```

```javascript
/* App.vue */
mounted(){
  const ele = document.querySelector('#video');
  //https://www.aplayz.co.kr/broadcast/a44610765711c95e0fcd4274c93116ec.m3u8
  const src = 'https://dev.stream.aplayz.co.kr/broadcast/507996edfd70ab18fa1dc99cb096966b.m3u8'
  this.$VideoJS.setVideo(ele)
  this.$VideoJS.initHls(src)
  this.$VideoJS.addEvent()
}
```

## vue - mixin
> 여러컴퍼넌트에 공통에 들어가는 "로직" 기능들을 재사용하는 방법, mixin에는 data,methods,created 등과 같은 컴퍼넌트 옵션

### mixin을 이용하여 모달 만들기
> mixin.js에 모달을 끄고 킬 수 있는 기능을 만든다.

```javascript
const mixin = {
  created: () => {
    console.log("mixin hook called");
  },
  data: () => {
    return {
      //데이터 선언
      modalVisible: false
    }
  },
  methods: {
    //모달 키기
    method1() {
      this.modalVisible = true
    },
    //모달 끄기
    method2() {
      this.modalVisible = false;
    }
  }
}

export { mixin }
```

> mixin을 해당 vue에 import 한다 method1,method2를 통해 모달을 open/close를 할 수 있다.
```html
<template>
  <div class="container">
    <transition name="fade">
      <SelectModal v-if="modalVisible" @onclose="closeEvent"></SelectModal>
    </transition>

    <button id="modalbtn" @click="method1()">모달 클릭</button>
  </div>
</template>

<script>
import SelectModal from '@/components/SelectModal.vue'
import { mixin } from '@/mixin/mixin'
export default {
  name: 'mainMixin',
  components: {
    SelectModal
  },
  mixins: [mixin],
  data() {
    return {
    };
  },

  mounted() {
  },

  methods: {
    closeEvent() {
      this.method2();
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}</style>

```

### mixin 단점
> vue인스턴스의 data와 mixin의 data가 서로 겹칠수 있다.


## vue transition

### v-enter
> enter의 시작 상태. 엘리먼트가 삽입되기 전에 적용되고 한 프레임 후에 제거됩니다
### v-enter-active
> enter에 대한 활성 및 종료 상태. 엘리먼트가 삽입되기 전에 적용됩니다. 트랜지션 / 애니메이션이 완료되면 제거됩니다.
### v-enter-to
> 진입상태가 완료 될때 사용


### v-leave
> leave를 위한 시작 상태. 진출 트랜지션이 트리거 될 때 적용되고 한 프레임 후에 제거됩니다.

### v-leave-active
> leave에 대한 활성 및 종료 상태.
### v-leave-to
> 진출 상태의 끝에서 실행됩니다


## Jest

### vue jest 설치
```bash
npm install @vue/cli-plugin-unit-jest@5.0.0 --save-dev
npm install @vue/test-utils@1.3.6 --save-dev
npm install @vue/vue2-jest@27.0.0 --save-dev

npm install babel-core@^7.0.0-bridge.0 --save-dev
npm install babel-jest@27.3.1 --save-dev
npm install @babel/core@7.0.0-bridge.0 --save-dev
npm install @babel/preset-env@7.22.10 --save-dev
```
```javascript
//babel.config.js
module.exports = {
  presets: [
    //"@babel/preset-env", 수동설정 원하는 경우
    '@vue/cli-plugin-babel/preset' //vue cli에서 자동설정됨
  ]
}
```


```bash
npm install jest@27.0.3 --save-dev
```


```javascript
//jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: [
        "js",
        "json",
        // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
        "vue"
    ],
    transform: {
        ".*\\.(vue)$": "@vue/vue2-jest",
        ".*\\.(js)$": "babel-jest",
    },
    moduleNameMapper: {
        // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        // __tests__ 경로 하위에 있는 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/__tests__/**/*.[jt]s?(x)",
        // 파일 이름에 'xxx.spec' 또는 'xxx.test'라는 이름이 붙여인 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,vue}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**vue.config.js**",
        "!**babel.config.js**",
        "!**jest.config.js**",
    ]
}
```

### 명령어 등록
```json
{
 "scripts": {
 	"test:unit": "vue-cli-service test:unit"
 }
}
```

### vue + jest 사용법

#### describe
> 단위테스트의 그룹을 묶어둔것. 여기서는 한개의 Component 단위로 묶어서 테스트를 실시하였다.
```javascript
describe('Helloworld.vue 테스트', () => {

});
```

#### test
> 단위테스트의 그룹에서, 최소 단위의 테스트를 작성
```javascript
describe('Helloworld.vue 테스트', () => {
  test('테스트1', () => {

  });
});
```

#### shallMount, mount
> shallMount는 하위 컴퍼넌트까지 렌더링 하지않는다. mount는 하위 컴퍼넌트까지 렌더링 한다.
##### shallMount 결과
```html
<div>
  <button>클릭</button>
  <child-component-stub></child-component-stub>
</div>
```

##### mount 결과
```html
<div>
  <button>클릭</button>
  <div>
    childComponent
  </div>
</div>
```

#### emit 테스트 하기 (자식 컴퍼넌트)
```html
<template>
  <div>
    childComponent
  </div>
</template>
<script>
export default {
  emits: ["callemit"],
  data() {
    return {

    }
  },
  methods: {
    method1() {
      this.$emit('callemit', 123)
    }
  }
}
</script>
<style scoped></style>
```


```javascript
import { shallowMount } from "@vue/test-utils";
import ChildComponent from "@/components/ChildComponent.vue";
describe('ChildComponent Testing', () => {
  test('Emit을 테스트한다.', () => {
    const wrapper = shallowMount(ChildComponent);
    wrapper.vm.$emit('callemit', 123);
    // assert event has been emitted
    expect(wrapper.emitted().callemit).toBeTruthy();
    // assert event count
    expect(wrapper.emitted().callemit.length).toBe(1)

    // assert event payload
    expect(wrapper.emitted().callemit[0]).toEqual([123]);
  });
});
```

#### emit 테스트 하기 (부모 컴퍼넌트)

```html
<template>
  <div>
    <button>클릭</button>
    <child-component @callemit="onCallEmit" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      emitted: false
    }
  },
  methods: {
    onCallEmit() {
      this.emitted = true;
    }
  }
}
</script>
<style scoped></style>
```

```javascript
import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import ChildComponent from "@/components/ChildComponent.vue";
describe('Helloworld.vue 테스트', () => {
  test("ChildComponent으로부터 callemit 함수 받기", async () => {
    const wrapper = mount(HelloWorld);
    wrapper.findComponent(ChildComponent).vm.$emit('callemit');
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Emitted')
  })
});

```

#### trigger events
> 키보드 클릭이나 , 마우스 클릭 할 경우 발생시키는 이벤트이다.
```javascript
test('버튼을 클릭할 경우 2배를 곱한다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 4;
    const btn = wrapper.find('#btn');
    await btn.trigger('click'); //click말고 다양한 이벤트가 나올수 있다.
    expect(wrapper.vm.quantity).toBe(8);
  });
```
##### click
```javascript
test('버튼을 클릭할 경우 2배를 곱한다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 4;
    const btn = wrapper.find('#btn');
    await btn.trigger('click');
    expect(wrapper.vm.quantity).toBe(8);
  });
```
##### Keyboard:KEY_DOWN
```javascript
test('방향키 아래 버튼 누를 경우 값을 감소시킨다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 4;
    const input = wrapper.find('input');
    await input.trigger('keydown.down');
    expect(wrapper.vm.quantity).toBe(3);
  });
```
##### Keyboard:KEY_UP
```javascript
 test('방향키 위 버튼 누를 경우 값을 증가시킨다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    const input = wrapper.find('input');
    await input.trigger('keydown.up');
    expect(wrapper.vm.quantity).toBe(1);
  });
```
##### Keyboard:ESCAPE
```javascript
test("Esc 누를 경우 값을 초기화 시켜준다.", async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 20;
    const input = wrapper.find('input');
    await input.trigger("keydown.esc");
    expect(wrapper.vm.quantity).toBe(0)
  });
```

#### mock
> 외부에 의존적인 부분이 존재할때, mock을 이용하는 것이며, 즉 가짜로 구현하여 대체한다.

```javascript
// foreach.js
export function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

```

```javascript
//foreach.spec.js
import { forEach } from '../../foreach';
const mockCallBack = jest.fn(x => 42 + x);

describe('ForEach mock testing', () => {
  test('test1', async () => {
    forEach([0, 1], mockCallBack);

    //mockCallBack 몇번 호출됐는지 확인
    expect(mockCallBack.mock.calls).toHaveLength(2);

    //매개변수 첫번째 값 확인
    expect(mockCallBack.mock.calls[0][0]).toBe(0);

    //매개변수 2번째 값 확인
    expect(mockCallBack.mock.calls[1][0]).toBe(1);

    //mockCallBack의 리턴된 값 확인
    expect(mockCallBack.mock.results[0].value).toBe(42)

  });
})
```
#### axios spyOn
> 실제 API를 사용하면 네트워크 비용이 들기때문에, axios를 가짜로 만들어처리한다.

```javascript
import { shallowMount } from "@vue/test-utils";
import AxiosPracticeComponent from "@/components/AxiosPracticeComponent.vue";
import axios from "axios";
describe('Axios 컴퍼넌트 테스팅', () => {
  test('버튼 클릭', async () => {
    const mockPostList = [
      { id: 1, title: 'title1' },
      { id: 2, title: 'title2' }
    ]
    //spyOn을 통해 mockResolvedValue사용하여 가짜 결과값을 리턴해준다.
    jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)
    const wrapper = shallowMount(AxiosPracticeComponent);
    const btn = wrapper.find('#btn');
    await btn.trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/posts');

    const posts = wrapper.findAll('[data-test="post"]');
    expect(posts).toHaveLength(2);

    expect(posts.at(0).text()).toContain('title1')
    expect(posts.at(1).text()).toContain('title2')
  });
});

```

#### spy

#### vue router jest
1. 실제 라우터 쓰는법
```javascript
//router/index.js
import VueRouter from "vue-router";
import Vue from "vue";
import nestedRoute from "@/layout/nestedRoute.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/nested',
    component: nestedRoute
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
```

```javascript
//App.spec.js
import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import { router } from "@/router";
import App from "@/App.vue";
import NestedRoute from '@/layout/nestedRoute.vue'
const localVue = createLocalVue();
localVue.use(VueRouter)

describe('App', () => {
  test('rendering', async () => {
    jest.mock("@/layout/NestedRoute.vue", () => ({
      name: "NestedRoute",
      render: h => h("div")
    }))
    const wrapper = mount(App, {
      localVue,
      router,
      stubs: {
        NestedRoute: true
      }
    });

    router.push("/nested")
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)

  });
});

```
2. $route,$router 글로벌 모킹 객체 만들기
```html
<!--nestedRoute.vue -->
<template>
  <div>
    Nested Route
    <div class="username">
      {{ $route.params.username }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'NestedRoute',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

```

```javascript
import { shallowMount } from "@vue/test-utils";
import NestedRoute from "@/layout/nestedRoute.vue";
describe('NestedRoute', () => {
  test('쿼리 스트링으부터 userName을 렌더한다.', () => {
    const username = "alice";
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });
    expect(wrapper.find('.username').text()).toBe(username)
  });
});

```


#### vuex jest
> 실제 vuex를 사용하는 방법과, mock사용하는 방법 두가지가 존재한다.

##### 1.실제 vuex를 사용하는 방법

```html
<!-- VuexComponent.vue-->
<template>
  <div>
    <p data-vuex="username">
      {{ username }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigVuexComponent',

  data() {
    return {
      username: this.$store.state.userName
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
```

```javascript
//vuexcomponent.spec.js
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from 'vuex'
import VuexComponents from '@/components/VuexComponent.vue'
import { store } from "@/store";
describe('Vuex componentn testing', () => {
  test('should ', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const wrapper = shallowMount(VuexComponents, {
      store,
      localVue
    });

    expect(wrapper.find('[data-vuex="username"]').text()).toBe("안녕하세요");
  });
});

```

##### 2.mock사용하는 방법

```html
<!-- VuexMockComponent.vue -->
<template>
  <div id="greet">
    {{ greet }}
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigVuexMockComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  computed: {
    greet() {
      return this.$store.getters.getterFullName
    }
  }
};
</script>
<style scoped></style>

```

```javascript
//vuexmockcomponent.spec.js
import { shallowMount } from "@vue/test-utils";
import VuexMockComponent from '@/components/VuexMockComponent.vue'
describe('VuexMockComponentn testing', () => {
  test('testing1', () => {
    const object = {
      userName: "안녕하세요",
      lastName: "최대건"
    }
    const wrapper = shallowMount(VuexMockComponent, {
      mocks: {
        $store: {
          state: {
            userName: object.userName,
            lastName: object.lastName
          },
          getters: {
            getterFullName: `${object.userName} ${object.lastName}님`
          }
        }
      }
    });

    expect(wrapper.find('#greet').text()).toBe("안녕하세요 최대건님")

  });
});

```


##### 3.router-link 테스트하는법

```html
<template>
  <div id="app">
    <!-- 이름을 가지는 라우트 -->
    <router-link id="home" :to="{ name: 'DummyLayout' }">User</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
</style>

```

```javascript
import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import { router } from "@/router";
import App from "@/App.vue";
import NestedRoute from '@/layout/nestedRoute.vue'
import DummyLayout from '@/layout/dummyLayout.vue'
const localVue = createLocalVue();
localVue.use(VueRouter)
describe('App', () => {
  test("DummyLayout router를 가지고 있는지 테스트", () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    });
    const routerLink = wrapper.findComponent("#home");
    //router-link에서 to속성의 값으로 테스트 한다.
    expect(routerLink.props().to).toEqual({ name: "DummyLayout" })

  })

});

```


#### setTimeOut,setInterval 사용

##### 1.setTimeOut
```html
<!-- /* setTimeOut */ -->
<template>
  <div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      count: 0,
      interval: null
    }
  },
  created() {
    setTimeout(() => {
      console.log("call setTime out");
      this.visible = true
    }, 10000);
  },
  destroyed() {
  }
}
</script>
<style scoped></style>

```

```javascript
//timeoutcomponent.spec.js
import { shallowMount } from "@vue/test-utils";
import TimeOutComponent from '@/components/TimeOutComponent.vue'
describe('timeout component', () => {
  let wrapper;
  beforeEach(() => {
    //1.jest.useFakeTimers();
    jest.useFakeTimers();
    wrapper = shallowMount(TimeOutComponent);

  })
  test('timeout', async () => {
    //2.jest.advanceTimersByTime 를 통해 몇초후에 발생할 것인지 설정
    jest.advanceTimersByTime(10000)
    expect(wrapper.vm.visible).toBe(true);
  });

});
```

##### 2.setInterval
```html
<!-- /* setInterval */ -->
<template>
  <div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      count: 0,
      interval: null
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
<style scoped></style>
```

```javascript
import { shallowMount } from "@vue/test-utils";
import TimeOutComponent from '@/components/TimeOutComponent.vue'
describe('timeout component', () => {
  let wrapper;
  beforeEach(() => {
    //1.jest.useFakeTimers();
    jest.useFakeTimers();
    wrapper = shallowMount(TimeOutComponent);
  })


  test("interval", () => {
    //2.jest.advanceTimersByTime 를 통해 몇초후에 발생할 것인지 설정
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.count).toBe(1);
  })
});

```

## 테스트 커버리지 기준
### 함수 커버리지 기준
> 함수가 최소 1번 이상 호출되었는지 기준으로 커버리지를 계산. 단 함수내의 모든 코드가 실행 되었는지에 대한것은 기준에서 제외된다.

### 구문 커버리지 기준
> 라인 커버리지라고 부른다. 프로덕션 코드의 **전체 구문 중 몇 줄의 구문**이 실행되었는지를 기준으로 판단한다.

### 결정 커버리지 기준
> 브랜치 커버러지라고 불린다. **전체 조건식이 True인 케이스, False인 케이스 2가지가 최소한 한번 실행**되면 충족된다.


## Vue Directive
> vue에서는 v-model,v-if,v-show 이외에 사용자 정의 디렉티브를 등록 할 수 있다.

### focus 예제
```javascript
import Vue from "vue";

const focus = {
  //Element에 바인딩 될때 호출 1회성
  bind: (el) => {
    console.log("call bind ele : ", el)
  },
  //부모 노드에 삽입될때 호출 1회성
  inserted: (el) => {
    console.log("call inserted ele : ", el)
    el.focus()
  },
  //바인딩 된 값이 변경될때 호출
  update: (_, binding) => {
    console.log("updated focus");
  },
  //바인딩 된 값이 변경될때 호출(여기서 업데이트 될때 조작 하는것을 추천)
  componentUpdated: () => {
    console.log("componentUpdated focus")
  }
}
export default focus;
Vue.directive('focus', focus)
```

```html
<template>
  <input type="text" v-focus:foo="message" v-model="message">
</template>

<script>
import focus from '@/utils/directives/directives'
export default {
  name: 'SpaceView',
  directives: {
    focus,
  },
  components: {
  },
  data() {
    return {
      message: "hello"
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>

```

### 다아니믹 전달 인자
```javascript
import Vue from "vue";
const dynamicPin = {
  bind: (el, binding) => {
    el.style.position = 'fixed';
    //arg에 인자가 담겨있음.
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
}
export default dynamicPin;

Vue.directive('dynamicpin', dynamicPin)
```

```html
<template>
    <p class="font_white" v-dynamicpin:[direction]="500">Stick me 200px from the top of the page</p>
</template>
<script>
import dynamicPin from '@/utils/directives/dynamicpin'
export default {
  directives: {
    dynamicPin
  },
  data() {
    return {
      direction: 'left'
    };
  },
}
</script>
<style scoped></style>
```

### Vue directive rolling

#### 훅 함수

##### bind
> 바인딩되고 최초 한번 호출이 된다
##### inserted
> 바인딩 되고 Element가 Dom에 삽입됐을때
##### update
> 바인딩된 데이터가 Update가 일어날때
##### unbind
> 바인딩 해제가 될때



## High Order Components
> 컴퍼넌트 로직을 재사용 하기 위한 기술, 컴퍼넌트를 인자로 받아 컴퍼넌트를 리턴해주는 패턴

### hoc 공통부분 추출(spinner)

### hoc 라이프사이클 호출

### hoc props / emit

## StoryBook 설치

```bash
vue add storybook@next
```

### vue.config.js 세팅
```javascript
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  pluginOptions: {
    storybook: {
      allowedPlugins: [
        'define'
      ]
    }
  },
})
```

### storybookView.stories.js 작성
```javascript
import { action } from '@storybook/addon-actions';

import StoryBookView from './storybookView.vue';

export default {
  //컴퍼넌트 위치
  component: StoryBookView,
  //컴퍼넌트 title
  title: '스토리북',
  //컴퍼넌트 태그(검색할떄 도움이 된다고함)
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

}
```

## Vue Extend

## Vue Mixin

## Swiper

### coverflow

### coverflowEffect
