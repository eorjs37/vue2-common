<template>
  <div class="floating" @click="goVideo">
    <img class="img" src="../../public/images/album.jpg" alt="album.jpg">
    <div class="equalizer" v-if="$store.getters.getIsPlay">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    goVideo() {
      this.$router.push({ name: "video" }).catch(() => { })
    }
  }
}
</script>
<style scoped>
.floating {
  position: fixed;
  bottom: 10px;
  right: 30px;
  background-color: aqua;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
}

.floating .img {
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

.equalizer {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}

.bar {
  background-color: red;
  width: 6px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.bar:nth-child(1) {
  height: 20px;
  animation: bnce .7s .1s infinite alternate;
}

/**
* @todo heigth => scale변경
*/
@keyframes bnce {
  30% {
    transform: scaleY(1);
    background-color: tomato;
  }

  60% {
    transform: scaleY(0.3);
    background-color: purple;
  }

  100% {
    transform: scaleY(1);
    background-color: red;
  }
}

.bar:nth-child(2) {
  height: 30px;
  animation: bnce2 .5s .5s infinite alternate;
}

@keyframes bnce2 {
  20% {
    height: 50px;
    background-color: deepskyblue;
  }

  40% {
    height: 30px;
    background-color: orange;
  }

  100% {
    height: 60px;
    background-color: green;
  }
}

.bar:nth-child(3) {
  animation: bnce3 .8s .3s infinite alternate;
}

@keyframes bnce3 {
  80% {
    height: 70px;
  }

  100% {
    background-color: blue;
  }
}

.bar:nth-child(4) {
  animation: bnce4 .6s .7s infinite alternate;
}

@keyframes bnce4 {
  70% {
    height: 45px;
  }

  100% {
    background-color: brown;
  }
}

.bar:nth-child(5) {
  animation: bnce5 .5s .2s infinite alternate;
}

@keyframes bnce5 {
  60% {
    height: 20px;
  }

  100% {
    background-color: purple;
  }
}

/* 모바일 */
@media screen and (max-width:767px) {
  .floating {
    width: 60px;
    height: 60px;
  }

  .equalizer {
    padding: 5px;
  }
}
</style>
