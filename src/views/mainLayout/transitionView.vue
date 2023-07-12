<template>
  <div class="container">
    <button @click="show = !show">토글</button>
    <Transition name="fade">
      <p v-if="show" class="desc">Hello</p>
    </Transition>
    <button @click="toogle = !toogle">Toggle render</button>
    <Transition name="slide-fade">
      <p v-if="toogle">hello</p>
    </Transition>
    <button @click="bounce = !bounce">Bounce</button>
    <Transition name="bounce">
      <p v-if="bounce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia
        diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </Transition>
    <button @click="toggleAni = !toggleAni">toggleAni</button>
    <Transition name="custom-classes-transition" enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <p v-if="toggleAni" class="desc">Hello</p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'transitionViewcs',

  data() {
    return {
      show: false,
      toogle: false,
      bounce: false,
      toggleAni: false,
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-to {
  transition: opacity .5s;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
