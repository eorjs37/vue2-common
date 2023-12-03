<template>
  <div class="obigo_container">
    <div ref="swiper" class="swiper swiper_wrap">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <div class="swiper-slide center" v-for="(item, index) in list" :key="index">
          <figure class="carpurpose_preview_wrap">
            <img class="carpurpose_preview_img" :src="require(`@/assets/images/obigo/player/gotowork_player.png`)" alt="">
          </figure>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

  </div>
</template>
<script>
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default {
  name: 'SwiperVerticalView',

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
    };
  },

  mounted() {
    const swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      direction: 'vertical',
      modules: [Pagination, Navigation],
      mousewheel: true,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
      allowSlidePrev: true,
      allowSlideNext: true
    })

    swiper.on('init', this.onInit);
  },

  methods: {
    onInit() { }
  },
};
</script>

<style>
body {
  background-color: var(--white);
}

.swiper-pagination-bullet {
  background-color: var(--828282);
}

.swiper-pagination-bullet-active {
  background-color: var(--white);
}
</style>
<style scoped src="@/assets/styles/swiperverticalview.css"></style>
