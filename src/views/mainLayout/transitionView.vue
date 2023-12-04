<template>
  <div class="container">

    <figure class="player_img_wrap">
      <img class="player_img" :src="require(`@/assets/images/obigo/player/gotowork_player.png`)"
        alt="gotowork_player.png">
    </figure>
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

.player_img_wrap {
  width: 300px;
  height: 300px;
}

.player_img {
  width: 100%;
  height: 100%;
}
</style>
