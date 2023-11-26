<template>
  <div ref="swiper" class="swiper swiper_wrap">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <figure class="purpose_img_wrap">
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
      // spaceBetween: 20,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 290,
        modifier: 2.5,
      },

    });

    swiper.on('init', this.onInit)

    swiper.init();
  },
  methods: {
    onInit() {
      console.log("onInit");
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
