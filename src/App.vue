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
