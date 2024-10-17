<template>
  <div id="app">
    <video id="streaming" hidden></video>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      worker: null,
      count: 0
    }
  },

  created() {},
  mounted() {},
  methods: {}
}
</script>

<style>
.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

body {
  background-color: var(--black);
}
</style>
