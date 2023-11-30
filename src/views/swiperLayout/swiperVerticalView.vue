<template>
  <div class="obigo_container">
    <div ref="swiper" class="swiper swiper_wrap">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <h1> {{ item.imgname }}</h1>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script>
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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
      grabCursor: true,
      direction: 'vertical',
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
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
</style>
<style scoped src="@/assets/styles/swiperverticalview.css"></style>
