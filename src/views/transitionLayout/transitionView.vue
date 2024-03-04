<template>
  <div class="tranistion_container">
    <button class="btn_transition" @click="show = !show">Toogle</button>
    <button class="btn_transition" @click="upDownShow = !upDownShow">Transtion</button>
    <button class="btn_transition" @click="isFade = !isFade">Transtion2</button>
    <transition name="fade">
      <p class="font_white" v-if="show">hello</p>
    </transition>

    <transition name="updown">
      <ul v-if="upDownShow" class="flex container_flex postion_fixed">
        <li class="flex_item">1</li>
        <li class="flex_item">2</li>
        <li class="flex_item">3</li>
        <li class="flex_item">4</li>
      </ul>
    </transition>

    <transition name="slide-in">
      <p v-if="isFade" class="font_white">Hello World</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TransitionView',

  data() {
    return {
      show: true,
      upDownShow: false,
      isFade: false
    }
  },

  mounted() {},

  methods: {}
}
</script>
<style scoped src="@/assets/styles/transitionview.css"></style>
