<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
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
