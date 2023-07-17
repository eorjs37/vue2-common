<template>
  <div>
    <section class="introduce">
      <video muted autoplay loop class="introducevideo"
        src="https://www.aplayz.co.kr/media/images/video/az_official.mp4"></video>
      <article class="introduce_title">
        <h1 class="play_title"><span class="mblock">세상 모든 공간을</span> <img class="play_img"
            src="../../../public/images/main_icon_logo.png" alt="play"> <span>하라</span> </h1>
      </article>
    </section>
    <section class="event">
      <h1 class="event_title">이제 선곡 걱정은 <span class="event_no">NO!</span></h1>
      <div class="mockup">
        <img class="mockup_img" src="../../../public/images/slide_mockup_06.png" alt="">
      </div>
    </section>
  </div>
</template>
<script>
import WOW from 'wowjs'

export default {
  name: 'HomeView',

  data() {
    return {
      introduceSrc: 'https://www.aplayz.co.kr/media/images/video/az_official.mp4'
    };
  },

  mounted() {
    this.setWow();
  },

  methods: {
    setWow() {
      const wow = new WOW.WOW({
        boxClass: 'event_title',
        animateClass: 'animate__animated animate__fadeInDown',
        offset: 5,
        mobile: true,
        live: true
      });

      wow.init();
    }
  },
};
</script>
<style scoped>
.introduce {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.introducevideo {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100vh;
  z-index: -1;
  object-fit: fill;
}

.event {
  color: var(--black);
  background-color: var(--black);
  position: relative;
  display: inline-block;
  width: 100%;
}

.event>.event_title {
  color: var(--white);
  font-weight: 700;
  font-size: 51px;
  text-align: center;
  margin-top: 300px;
  margin-bottom: 30px;
}

.event_title .event_no {
  color: var(--ff1150);
}

.introduce_title {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
}

.introduce_title h1 {
  font-size: 56px;
  line-height: 56px;
  color: var(--white);
  font-weight: 700;
}

.introduce_title .play {
  display: inline-block;
  height: 56px;
}

.play_img {
  height: 50px;
  vertical-align: bottom;
}

.play_title {
  animation-duration: 5s;
  animation-name: toptobottom;
}

.mockup {
  position: relative;
  width: 100%;
  height: 100vh;
}

.mockup_img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: inherit;
}

@keyframes toptobottom {
  0% {
    transform: translateY(-550%);
    opacity: 0;
  }

  50% {
    transform: translateY(50%);
    opacity: 0.5;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 576px)*/
@media all and (max-width:576px) {
  .introduce_title h1 {
    font-size: 40px;
  }

  .mblock {
    display: block;
  }

  .play_img {
    height: 30px;
    vertical-align: baseline;
  }
}
</style>
