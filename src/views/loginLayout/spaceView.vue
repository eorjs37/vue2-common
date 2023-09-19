<template>
  <space-slot>
    <template slot="menunm">
      스페이스등록
    </template>
    <template v-slot:main>
      <input type="text" v-focus:foo="message" v-model="message">
      <div id="baseexample">
        <p>Scroll down the page</p>
        <p class="font_white" v-pin="200">Stick me 200px from the top of the page</p>
        <p class="font_white" v-dynamicpin:[direction]="500">Stick me 200px from the top of the page</p>
      </div>
    </template>
    <div style="background-color: white;" id="hook-arguments-example" v-json:foo.a.b.c.e="message"></div>

  </space-slot>
</template>
<script>
import SpaceSlot from '@/slot/spaceSlot.vue'
import focus from '@/utils/directives/directives'
import jsonstring from '@/utils/directives/jsonstring'
import pin from '@/utils/directives/pin';
import dynamicPin from '@/utils/directives/dynamicpin'
export default {
  name: 'SpaceView',
  directives: {
    focus,
    jsonstring,
    pin,
    dynamicPin
  },
  components: {
    'space-slot': SpaceSlot
  },
  data() {
    return {
      message: "hello",
      direction: 'left'
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
