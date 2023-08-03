<template>
  <div>
    <hello-world @custom="onCustom" />
    <p v-if="emited">Emitted!</p>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'LoginView',
  components: {
    'hello-world': HelloWorld
  },
  data() {
    return {
      emited: false
    };
  },

  mounted() {

  },

  methods: {
    onCustom() {
      this.emited = true;
    }
  },
};
</script>
<style  scoped></style>
