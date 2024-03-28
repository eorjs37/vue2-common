<template>
  <div>
    <h1 class="font_white">TEST</h1>
  </div>
</template>
<script>
import { getSchedule } from '@/api/Schedule.js'
export default {
  name: 'HomeView',

  data() {
    return {}
  },
  created() {
    getSchedule()
  },
  mounted() {},

  methods: {}
}
</script>
<style scoped src="@/assets/styles/home.css"></style>
