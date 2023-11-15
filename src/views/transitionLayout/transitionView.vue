<template>
  <div class="tranistion_container">
    <button @click="show = !show">Toogle</button>
    <transition name="fade">
      <p class="font_white" v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TransitionView',

  data() {
    return {
      show: true
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped src="@/assets/styles/transitionview.css"></style>
