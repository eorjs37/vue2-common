<template>
  <section class="obigo_container">
    <swiper-container :speed="500" :loop="true" :centered-slides="true" :css-mode="true" :pagination="{
      hideOnClick: true
    }">
      <swiper-slide>
        Slide 1
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  </section>
</template>
<script>
import { register } from 'swiper/element/bundle';
register();
export default {
  name: 'ObigoView',

  data() {
    return {
    };
  },

  mounted() {

  },

  methods: {
  },
  computed: {
    backgroundImageInlineStyle() {
      //{ 'background-image': 'url(../../assets/images/obigo/album.png)' }
      return `background-image: url(${require('@/assets/images/obigo/album.png')})`
    }
  },
  destroyed() {

  }
};
</script>
<style scoped></style>
<style scoped src="@/assets/styles/obigo.css"></style>
