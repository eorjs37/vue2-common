<template>
  <div class="obigo_container">
    <swiper class="swiper obigo_w100 " :options="swiperOption">
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/business.png')" alt="business">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/daily.png')" alt="business">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/drive.png')" alt="drive">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/gotowork.png')" alt="gotowork">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/leavework.png')" alt="leavework">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/trip.png')" alt="trip">
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'ObigoPurposeView',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 800,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3.1,
        coverflowEffect: {
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped src="@/assets/styles/obigopurpose.css"></style>
