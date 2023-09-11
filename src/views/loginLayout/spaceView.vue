<template>
  <space-slot>
    <template slot="menunm">
      스페이스등록
    </template>
  </space-slot>
</template>
<script>
import SpaceSlot from '@/slot/spaceSlot.vue'
export default {
  name: 'SpaceView',
  components: {
    'space-slot': SpaceSlot
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
