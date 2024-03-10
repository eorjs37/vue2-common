<template>
  <div>
    <button class="btn" @click="bottomSheet = !bottomSheet">Bottom Sheet</button>
    <transition
      name="up_down"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <ul v-if="bottomSheet" class="bottom_sheet">
        <li class="bottom_sheet_item">1</li>
        <li class="bottom_sheet_item">2</li>
        <li class="bottom_sheet_item">3</li>
        <li class="bottom_sheet_item">4</li>
        <li class="bottom_sheet_item">5</li>
        <li class="bottom_sheet_item">6</li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AnimationView',

  data() {
    return {
      bottomSheet: false
    }
  },

  mounted() {},

  methods: {
    beforeEnter() {
      console.log('1.beforeEnter')
    },
    enter() {
      console.log('2.enter')
    },
    afterEnter() {
      console.log('3.afterEnter')
    },
    beforeLeave() {
      console.log('1.beforeLeave')
    },
    leave() {
      console.log('2.leave')
    },
    afterLeave() {
      console.log('3.afterLeave')
    }
  }
}
</script>
<style scoped src="@/assets/styles/animationview.css"></style>
