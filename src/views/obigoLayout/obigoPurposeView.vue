<template>
  <div class="obigo_container">
    <carousel-3d :autoplay="false" :inverse-scaling="500" :space="250" :width="463" :height="346" :controls-visible="true"
      :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" :clickable="false" :perspective="0">
      <slide-comp v-for="(item, index) in purposeList" :key="`purpose${index}`" :index="index">

        <figure class="slider-image">
          <img class="slider-image_img" :src="require(`@/assets/images/obigo/purpose/${item.imgurl}`)" :alt="item.imgurl">
        </figure>
      </slide-comp>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'ObigoPurposeView',
  components: {
    'carousel-3d': Carousel3d,
    'slide-comp': Slide
  },
  data() {
    return {
      purposeList: [
        { imgurl: 'business.png' },
        { imgurl: 'daily.png' },
        { imgurl: 'drive.png' },
        { imgurl: 'gotowork.png' },
        { imgurl: 'leavework.png' },
        { imgurl: 'trip.png' }
      ]
    };
  },

  mounted() {

  },
  methods: {
  }

};
</script>
<style scoped src="@/assets/styles/obigopurpose.css"></style>
