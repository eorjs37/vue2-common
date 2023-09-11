<template>
  <main-slot>
    <template slot="menunm">
      마이스페이스
    </template>
    <template slot="main">

    </template>
  </main-slot>
</template>
<script>
import mainSlot from '@/slot/normalSlot.vue'
export default {
  name: 'MainView',
  components: {
    'main-slot': mainSlot
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
