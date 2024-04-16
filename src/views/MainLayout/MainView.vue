<template>
  <div>
    <h1>Main.vue</h1>
    <p data-userinfo="username">{{ getUserInfo.name }}</p>
    <p data-userinfo="userage">{{ getUserInfo.age }}</p>
    <p data-fake="id">
      {{ id }}
    </p>
    <button data-btn="btn1" @click="intervalTest">버튼</button>
    <button data-btn="btn2" @click="addCounter">버튼2</button>
  </div>
</template>
<script>
import { fakeApi } from '@/api/fakeApi'
export default {
  name: 'MainView',

  async created() {
    await this.$store.dispatch('apiSetUserInfo')
    fakeApi(0).then((res) => {
      this.id = res.id
    })

    this.intervalId = setInterval(() => {
      this.fakeApiInterval()
    }, 2000)
  },

  data() {
    return {
      id: 0,
      intervalId: -1
    }
  },

  mounted() {
    this.setVideo()
  },

  methods: {
    setVideo() {
      this.$VideoPlayer.setVideo(document.querySelector('#streaming'))
    },
    intervalTest() {
      console.log('2초후')
    },
    fakeApiInterval() {
      fakeApi(this.id).then((res) => {
        this.id = res.id
      })
    },
    addCounter() {
      this.$store.commit('setCounter', this.$store.getters.getCounter + 1)
    }
  },

  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo
    }
  },
  destroyed() {
    clearInterval(this.intervalId)
  }
}
</script>
