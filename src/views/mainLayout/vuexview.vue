<template>
  <div class="test">
    <alert-comp :headtitle="'타이틀'" :bodycontents="'body'" />
    {{ getDoubleCount }}
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

  methods: {},
  computed: {
    getDoubleCount() {
      return this.$store.getters['userInfo/doubleCont']
    }
  }
}
</script>
<style scoped></style>
