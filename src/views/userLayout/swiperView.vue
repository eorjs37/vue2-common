<template>
  <div>
    <swiper :slides-per-view="3" :space-between="50">
      <swiper-slide>
        <h1 class="font_white">
          Slide 1
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="font_white">
          Slide 2
        </h1>
      </swiper-slide>
      <swiper-slide>
        <h1 class="font_white">
          Slide 3
        </h1>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: 'SwiperView',
  components: {
    'swiper': swiper,
    'swiper-slide': swiperSlide,
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
