<template>
  <div class="swiper6_container">
    <swiper ref="filterSwiper" :options="swiperOption" @ready="onInit" @slideChange="onSlideChange">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <figure class="purpose_img_wrap" :id="`purpose_img_wrap${index}`">
          <img :src="require(`@/assets/images/obigo/purpose/${item.imgname}`)" :alt="item.imgname" class="purpose_img">
        </figure>
      </swiper-slide>
    </swiper>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
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
        slidesPerView: 'auto',
        grabCursor: true,
        init: false,
        centeredSlides: true,
        loop: true,
        effect: 'coverflow',
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
      },

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
    this.$refs.filterSwiper.swiper.init();
  },
  methods: {
    async onInit() {
      await this.$nextTick();
      const list = Array.from(document.querySelector('.swiper-wrapper').children) || [];
      //const findIndex = Array.from(list).findIndex(item => item.classList.contains('swiper-slide-active'));
      // const prev1 = findIndex - 1;
      // const prev2 = findIndex - 2;

      list[0].style.visibility = 'hidden';
      list[1].style.visibility = 'hidden';
      list[2].style.visibility = 'hidden';
      list[3].style.visibility = 'hidden';

      list[9].style.visibility = 'hidden';
      list[10].style.visibility = 'hidden';
      list[11].style.visibility = 'hidden';
      list[12].style.visibility = 'hidden';
      list[13].style.visibility = 'hidden';
      list[14].style.visibility = 'hidden';
      list[15].style.visibility = 'hidden';
      list[15].style.visibility = 'hidden';
      list[16].style.visibility = 'hidden';
      list[17].style.visibility = 'hidden';

      // const find = list.find(item => item.classList.contains('swiper-slide-active'))
      // console.log('find : ', find);
      // list.forEach(ele => {

      // });
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  }
}
</script>
<style></style>
<style scoped src="@/assets/styles/swiper6.css"></style>
