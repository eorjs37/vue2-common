<template>
  <div>
    <player-child ref="child1" v-if="isShow" @send-data="onSendData" />
    <button ref="btn1" @click="isShow = !isShow">버튼</button>
  </div>
</template>
<script>
import PlayerChildComp from '@/components/PlayerChildComp.vue'
export default {
  name: 'Vue2EditorconfigPlayerView',
  components: {
    'player-child': PlayerChildComp
  },
  data() {
    return {
      isShow: false
    }
  },

  mounted() {},

  methods: {
    onSendData(text) {
      alert(text)
    }
  }
}
</script>
<style scoped></style>
