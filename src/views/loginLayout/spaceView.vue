<template>
  <space-slot>
    <template slot="menunm">
      스페이스등록
    </template>
    <template v-slot:main>
      <input type="text" v-focus>
      <div style="background-color: white;" id="hook-arguments-example" v-json:foo.a.b.c.e="message"></div>
    </template>
  </space-slot>
</template>
<script>
import SpaceSlot from '@/slot/spaceSlot.vue'
import focus from '@/utils/directives/directives'
import jsonstring from '@/utils/directives/jsonstring'
export default {
  name: 'SpaceView',
  directives: {
    focus,
    jsonstring
  },
  components: {
    'space-slot': SpaceSlot
  },
  data() {
    return {
      message: "hello"
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
