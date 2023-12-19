<template>
  <div class="swiper6_container">
    <swiper ref="filterSwiper" :options="swiperOption">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
      <swiper-slide>5</swiper-slide>
      <swiper-slide>6</swiper-slide>
      <swiper-slide>7</swiper-slide>
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
