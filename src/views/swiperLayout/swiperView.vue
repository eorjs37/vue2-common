<template>
  <div ref="swiper" class="swiper swiper_wrap">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <figure class="purpose_img_wrap" :id="`purpose_img_wrap${index}`">
          <img :src="require(`@/assets/images/obigo/purpose/${item.imgname}`)" :alt="item.imgname" class="purpose_img">
        </figure>
      </div>
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: "SwiperView",
  data() {
    return {
      list: [
        {
          imgname: "business.png"
        },
        {
          imgname: "daily.png"
        },
        {
          imgname: "drive.png"
        },
        {
          imgname: "gotowork.png"
        },
        {
          imgname: "leavework.png"
        },
        {
          imgname: "trip.png"
        },
      ]
    }
  },
  mounted() {
    const swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      init: false,
      effect: 'coverflow',
      slidesPerView: 'auto',
      grabCursor: true,
      centeredSlides: true,
      modules: [Navigation, EffectCoverflow],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0, //회전
        stretch: 120, //
        depth: 200, // 슬라이드 깊이 Translate3D에서 z축을 담당한다
        modifier: 2,
        slideShadows: true,
      },

    });

    swiper.on('init', this.onInit);
    swiper.on('realIndexChange', this.onRealIndexChange);
    swiper.on('click', () => {
      console.log("click");
    })
    swiper.init();
  },
  methods: {
    onInit() {
      console.log("onInit");
    },
    async onRealIndexChange(swiper) {
      const { slides } = swiper;
      //opacity 세팅
      slides.forEach(element => {
        if (!element.classList.contains('swiper-slide-visible')) {
          element.style.opacity = 0;
        } else {
          element.style.opacity = 1;
        }

      });

      //
      await this.$nextTick();
      const ele = document.querySelector(".swiper-slide-active");
      const swiperIndex = parseInt(ele.getAttribute('data-swiper-slide-index'))

      //active은 opacity 1
      const activeEle = document.querySelector(`#purpose_img_wrap${swiperIndex}`);
      activeEle.style.opacity = 1;
      //양옆은 opacity 0.6666
      const oneLeft = swiperIndex === 0 ? 5 : swiperIndex - 1;
      const oneRight = swiperIndex === 5 ? 0 : swiperIndex + 1;
      const oneLeftEle = document.querySelector(`#purpose_img_wrap${oneLeft}`);
      const oneRightEle = document.querySelector(`#purpose_img_wrap${oneRight}`);

      oneLeftEle.style.opacity = 0.6666;
      oneRightEle.style.opacity = 0.6666;
      //제일 끝은 opacity 0.3333

      const twoLeft = swiperIndex - 2 < 1 ? 4 : swiperIndex - 2;
      const twoRight = swiperIndex === 5 ? 1 : swiperIndex + 2;

      const twoLeftEle = document.querySelector(`#purpose_img_wrap${twoLeft}`);
      const twoRightEle = document.querySelector(`#purpose_img_wrap${twoRight}`);
      if (twoLeftEle) {
        twoLeftEle.style.opacity = 0.3333;
      }

      if (twoRightEle) {
        twoRightEle.style.opacity = 0.3333;
      }
    }
  }
}
</script>
<style>
body {
  background-color: var(--white);
}
</style>
<style src="@/assets/styles/swiperview.css" scoped></style>
