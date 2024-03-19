<template>
  <div class="test">
    {{ getDoubleCount }}
  </div>
</template>
<script>
export default {
  name: 'VuexView',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
  computed: {
    getDoubleCount() {
      return this.$store.getters['userInfo/doubleCont']
    }
  }
}
</script>
<style scoped></style>
