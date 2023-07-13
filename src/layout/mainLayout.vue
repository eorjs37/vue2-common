<template>
  <div>
    <HeaderComponent />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterComponent />
    <FloatingComponent />
    <video id="global_video" controls autoplay playsinline></video>
    <video id="brand_video" controls autoplay playsinline></video>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FloatingComponent from '@/components/FloatingComponent.vue';
import crontab from '@/assets/mocks/crontab.json'
export default {
  name: 'mainLayout',
  components: { HeaderComponent, FooterComponent, FloatingComponent },
  data() {
    return {

    };
  },
  created() {
  },

  mounted() {
    const videoSrc = `https://stream.aplayz.co.kr/broadcast/24737233f34416a2891a731eca669c9a.m3u8`
    this.$VideoJS.setVideo(document.querySelector('#global_video'))
    this.$VideoJS.initHls(videoSrc);
    this.$VideoJS.addEvent();

    this.addJob();
  },

  methods: {
    /**
     * @description job 추가
     * @author CHOI DAE GEON
     */
    addJob() {
      setTimeout(() => {
        const { list } = crontab
        list.forEach((item, index) => {
          //https://www.aplayz.co.kr/stream/getMusic?v92d2/GeNMAC21M72EWjsCrsUTmcjLRrs+bVWmXZUTVdF5QUNWxDeKGQOCq1
          this.$BrandVideoJS.addCronJob(`item${index}`, item, { src: 'https://www.aplayz.co.kr/stream/getMusic?v92d2/GeNMAC21M72EWjsCrsUTmcjLRrs+bVWmXZUTVdF5QUNWxDeKGQOCq1' })
        });
      }, 2000)

    }
  },
};
</script>

<style  scoped>
#global_video {
  visibility: hidden;
}

#brand_video {
  visibility: hidden;
}
</style>
