<template>
  <div id="app">
    <video id="video" controls autoplay playsinline></video>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$myGlobalMethod();
  }
}
</script>

<style></style>
