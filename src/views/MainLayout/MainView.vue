<template>
  <div>
    <h1>Main.vue</h1>
    <p data-userinfo="username">{{ getUserInfo.name
     }}</p>
     <p data-userinfo="userage">{{ getUserInfo.age
     }}</p>
  </div>
</template>
<script>
export default {
  name: 'MainView',

  async created(){
      await this.$store.dispatch("apiSetUserInfo")
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {},

  computed:{
    getUserInfo(){
      return this.$store.getters.getUserInfo
    }
  }
}
</script>
