<template>
  <section class="obigo_container">
    <nav class="obigo_nav">
      <ul>
        <li>1</li>
      </ul>
    </nav>
    <!--obigo_swiper_nav_open-->
    <swiper class="swiper obigo_w100 " :options="swiperOption">
      <swiper-slide class="slide">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <div class="obigo_car_music_box">
              <h1 class="obigo_music_title" data-swiper-parallax="-2300">Good Mood (feat. Terri Walker) Good</h1>
              <h2 class="obigo_music_artist" data-swiper-parallax="-1200">Donae’o featuring Terri Walker</h2>
              <ul class="obigo_mucis_control" data-swiper-parallax="-900">
                <li class="align_center">
                  <figure id="thumbup" class="obigo_album_item_box" @click="thumbActive">
                    <img class="obigo_thumb_wrap obigo_album_thumb"
                      :src="require('@/assets/images/obigo/thumb_active.png')" alt="thumb_active ">
                  </figure>
                </li>
                <li class="obigo_album_item_box_musicplay">
                  <figure class="obigo_play_wrap">
                    <img class="obigo_album_img" :src="require('@/assets/images/obigo/play.png')" alt="play">
                  </figure>
                </li>
                <li class="obigi_music_control_item last align_center">
                  <figure id="thumbdown" class="obigo_album_item_box">
                    <img class="obigo_thumb_wrap obigo_album_thumb" :src="require('@/assets/images/obigo/thumb_down.png')"
                      alt="thumb_down">
                  </figure>
                </li>

              </ul>
            </div>
            <div class="obigo_album_box" data-swiper-parallax="-1200">
              <figure class="obigo_album_wrap">
                <img class="obigo_album_img" :src="require('@/assets/images/obigo/album.png')" alt="photographer">
              </figure>

            </div>
          </div>
          <img class="obigo_music_album_bgimg" :src="require('@/assets/images/obigo/album.png')">
        </div>

      </swiper-slide>
      <swiper-slide class="slide">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <div class="obigo_car_music_box">
              <h1 class="obigo_music_title" data-swiper-parallax="-2300">Good Mood (feat. Terri Walker) Good</h1>
              <h2 class="obigo_music_artist" data-swiper-parallax="-900">Donae’o featuring Terri Walker</h2>
              <ul class="obigo_mucis_control" data-swiper-parallax="-700">
                <li class="align_center">
                  <figure class="obigo_album_item_box" @click="thumbActive">
                    <img class="obigo_thumb_wrap obigo_album_thumb"
                      :src="require('@/assets/images/obigo/thumb_active.png')" alt="thumb_active ">
                  </figure>
                </li>
                <li class="obigo_album_item_box_musicplay">
                  <figure class="obigo_play_wrap">
                    <img class="obigo_album_img" :src="require('@/assets/images/obigo/play.png')" alt="play">
                  </figure>
                </li>
                <li class="obigi_music_control_item last align_center">
                  <figure class="obigo_album_item_box">
                    <img class="obigo_thumb_wrap obigo_album_thumb" :src="require('@/assets/images/obigo/thumb_down.png')"
                      alt="thumb_down">
                  </figure>
                </li>

              </ul>
            </div>
            <div class="obigo_album_box" data-swiper-parallax="-1200">
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
            <div class="obigo_car_music_box">
              <h1 class="obigo_music_title" data-swiper-parallax="-1200">Good Mood (feat. Terri Walker) Good</h1>
              <h2 class="obigo_music_artist" data-swiper-parallax="-900">Donae’o featuring Terri Walker</h2>
              <ul class="obigo_mucis_control" data-swiper-parallax="-700">
                <li class="align_center">
                  <figure class="obigo_album_item_box" @click="thumbActive">
                    <img class="obigo_thumb_wrap obigo_album_thumb"
                      :src="require('@/assets/images/obigo/thumb_active.png')" alt="thumb_active ">
                  </figure>
                </li>
                <li class="obigo_album_item_box_musicplay">
                  <figure class="obigo_play_wrap">
                    <img class="obigo_album_img" :src="require('@/assets/images/obigo/play.png')" alt="play">
                  </figure>
                </li>
                <li class="obigi_music_control_item last align_center">
                  <figure class="obigo_album_item_box">
                    <img class="obigo_thumb_wrap obigo_album_thumb" :src="require('@/assets/images/obigo/thumb_down.png')"
                      alt="thumb_down">
                  </figure>
                </li>

              </ul>
            </div>
            <div class="obigo_album_box" data-swiper-parallax="-1200">
              <figure class="obigo_album_wrap">
                <img class="obigo_album_img" :src="require('@/assets/images/obigo/photographer.jpeg')" alt="photographer">
              </figure>

            </div>
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
        parallax: true,
        speed: 800,

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
    const thumbUpele = document.querySelector('#thumbup');
    const thumbDownele = document.querySelector('#thumbdown');
    thumbUpele.addEventListener("touchstart", (ele) => {
      ele.target.classList.add('active');
    })
    thumbUpele.addEventListener("touchend", (ele) => {
      ele.target.classList.remove('active');
    })

    thumbDownele.addEventListener("touchstart", (ele) => {
      ele.target.classList.add('active');
    })
    thumbDownele.addEventListener("touchend", (ele) => {
      ele.target.classList.remove('active');
    })
  },

  methods: {
    thumbActive() {

    }
  },
  computed: {
    backgroundImageInlineStyle() {
      return `background-image: url(${require('@/assets/images/obigo/album.png')})`
    }
  },
  destroyed() {

  }
};
</script>
<style scoped></style>
<style scoped src="@/assets/styles/obigo.css"></style>
