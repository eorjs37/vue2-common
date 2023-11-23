<template>
  <section class="obigo_container">
  </section>
</template>
<script>
import rolling from '@/utils/directives/rolling'
export default {
  name: 'ObigoView',
  directives: {
    rolling
  },
  data() {
    return {
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
    },
    onSlideChange() {
      console.log('onSlideChange');
    },
    onTransitionEnd() {
      console.log('onTransitionEnd');
    },
    onSlideChangeTransitionEnd() {
      console.log('onSlideChangeTransitionEnd');
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
