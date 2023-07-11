<template>
  <div class="container">
    <button @click="show = !show">토글</button>
    <Transition name="fade">
      <p v-if="show" class="desc">Hello</p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'transitionViewcs',

  data() {
    return {
      show: false
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
.desc {
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
