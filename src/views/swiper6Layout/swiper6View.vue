<template>
  <div class="swiper6_container">
    <swiper ref="filterSwiper" :options="swiperOption">
      <swiper-slide>
        <div class="box">
          1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          4
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          5
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          6
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          7
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">

        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
export default {
  name: "swiper6View",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        direction: 'vertical',
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerGroup: 1,
        preventInteractionOnTranstition: true
      }
    }
  },
  mounted() {
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  }
}
</script>
<style scoped src="@/assets/styles/swiper6.css"></style>
