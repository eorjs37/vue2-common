<template>
  <section class="obigo_container">
    <!--obigo_swiper_nav_open-->
    <swiper class="swiper obigo_w100 " :options="swiperOption">
      <swiper-slide class="slide" v-for="(item) in channelList" :key="item.id">
        <div class="obigo_swiper">
          <div class="obigo_car_music">
            <div class="obigo_car_music_box">
              <h1 :id="`music${item.id}`" class="obigo_music_title" v-rolling:value="item.musicInfo.musicTitle"
                data-swiper-parallax="-2300"></h1>
              <h2 class="obigo_music_artist" data-swiper-parallax="-1200">{{ item.musicInfo.musicArtist }}</h2>
              <ul class="obigo_mucis_control" data-swiper-parallax="-900">
                <li class="align_center">
                  <figure id="thumbup" class="obigo_album_item_box">
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
                <img class="obigo_album_img" :src="require(`@/assets/images/obigo/${item.albumImgUrl}`)"
                  alt="photographer">
              </figure>
            </div>
          </div>
          <img class="obigo_music_album_bgimg" :src="require(`@/assets/images/obigo/${item.albumImgUrl}`)">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import rolling from '@/utils/directives/rolling'
export default {
  name: 'ObigoView',
  directives: {
    rolling
  },
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
      },
      channelList: [
        {
          id: "channel1",
          musicInfo: {
            musicTitle: "Good Mood (feat. Terri Walker) Good0",
            musicArtist: "Donae’o featuring Terri Walker"
          },
          titleSpeed: -2300,
          artistSpeed: -1200,
          musicControlSpeed: -900,
          albumBoxSppe: -1200,
          albumImgUrl: 'album.png'
        },
        {
          id: "channel2",
          musicInfo: {
            musicTitle: "Good Mood",
            musicArtist: "Donae’o featuring Terri Walker"
          },
          titleSpeed: -2300,
          artistSpeed: -1200,
          musicControlSpeed: -900,
          albumBoxSppe: -1200,
          albumImgUrl: 'photographer.jpeg'
        },
        {
          id: "channel3",
          musicInfo: {
            musicTitle: "Good Mood (feat. Terri Walker) Good2",
            musicArtist: "Donae’o featuring Terri Walker"
          },
          titleSpeed: -2300,
          artistSpeed: -1200,
          musicControlSpeed: -900,
          albumBoxSppe: -1200,
          albumImgUrl: 'album.png'
        }, {
          id: "channel4",
          musicInfo: {
            musicTitle: "Good Mood (feat. Terri Walker) Good3",
            musicArtist: "Donae’o featuring Terri Walker"
          },
          titleSpeed: -2300,
          artistSpeed: -1200,
          musicControlSpeed: -900,
          albumBoxSppe: -1200,
          albumImgUrl: 'photographer.jpeg'
        }, {
          id: "channel5",
          musicInfo: {
            musicTitle: "Good Mood (feat. Terri Walker) Good4",
            musicArtist: "Donae’o featuring Terri Walker"
          },
          titleSpeed: -2300,
          artistSpeed: -1200,
          musicControlSpeed: -900,
          albumBoxSppe: -1200,
          albumImgUrl: 'album.png'
        }
      ]
    };
  },

  mounted() {
  },

  methods: {
    thumbActive($ele) {
      if ($ele) {
        $ele.target.classList.add('active');
      }
    },
    thumbUnActive($ele) {
      if ($ele) {
        $ele.target.classList.remove('active');
      }
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
