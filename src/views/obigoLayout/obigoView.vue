<template>
  <section class="obigo_container">
    <swiper class="swiper obigo_w100" :options="swiperOption">
      <swiper-slide class="slide">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <div class="obigo_car_music_box">
              <h1 class="obigo_music_title">Good Mood (feat. Terri Walker) Good</h1>
              <h2 class="obigo_music_artist">Donae’o featuring Terri Walker</h2>
              <ul class="obigo_mucis_control">
                <li class="obigo_album_item_box">
                  <figure class="obigo_thumb_wrap">
                    <img class="obigo_album_img" :src="require('@/assets/images/obigo/thumb_active.png')"
                      alt="thumb_active ">
                  </figure>
                </li>


              </ul>
            </div>
            <div class="obigo_album_box">
              <figure class="obigo_album_wrap">
                <img class="obigo_album_img" :src="require('@/assets/images/obigo/photographer.jpeg')" alt="photographer">
              </figure>

            </div>
          </div>
          <img class="obigo_music_album_bgimg" :src="require('@/assets/images/obigo/photographer.jpeg')">
        </div>

      </swiper-slide>
      <swiper-slide class="slide">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <h1 class="title">Slide2</h1>
          </div>
          <img class="obigo_music_album_bgimg" :src="require('@/assets/images/obigo/photographer.jpeg')">
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <h1 class="title">Slide3</h1>
          </div>
          <img class="obigo_music_album_bgimg" :src="require('@/assets/images/obigo/photographer.jpeg')">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'ObigoView',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    };
  },

  mounted() {
    document.addEventListener("touchstart", () => { }, true);
  },

  methods: {
    onSlideChange() {
      console.log('slide change');

    }
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
