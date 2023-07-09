<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mixin } from '@/mixin/mixin'
export default {
  name: 'App',
  mixins: [mixin],
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
