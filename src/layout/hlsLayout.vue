<template>
  <div>
    <video id="hlsVideo" hidden autoplay controls></video>
    <router-view />

  </div>
</template>
<script>
export default {
  name: 'hlsLayout',
  data() {
    return {

    }
  }
}
</script>
<style scoped></style>
