<template>
  <div class="test1">
    <alert-comp :headtitle="'타이틀'" :bodycontents="'body'" />
    <span class="test">{{ getDoubleCount }}</span>

    <button id="userinfoapi" data-test="userinfoApi" @click="setApiUserInfo">
      사용자정보가져오기
    </button>

    <p>
      <span id="name" class="name">{{ getName }}</span>
    </p>
  </div>
</template>
<script>
import AlertComp from '@/components/common/AlertComp.vue'
export default {
  name: 'VuexView',
  components: {
    'alert-comp': AlertComp
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {
    async setApiUserInfo() {
      await this.$store.dispatch('apiGetUserInfo')
    }
  },
  computed: {
    getDoubleCount() {
      return this.$store.getters['userInfo/doubleCont']
    },
    getName() {
      return this.$store.getters['userInfo/getUserName']
    }
  }
}
</script>
<style scoped></style>
