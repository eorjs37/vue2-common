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
    const videoSrc = `https://dev.stream.aplayz.co.kr/broadcast/fd54c170f9741f4c1a5407f20870c52c.m3u8`
    this.$VideoJS.setVideo(document.querySelector('#global_video'))
    this.$VideoJS.initHls(videoSrc);
    this.$VideoJS.addEvent();
    this.$BrandVideoJS.setBrandVideo(document.querySelector('#brand_video'))

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
          this.$BrandVideoJS.addCronJob(`item${index}`, item, { src: 'https://dev.www.aplayz.co.kr/stream/getMusic?lXvb/KejEEHJ/9Y87XL02hEivlQwdhz8HrqNjZMTPvDAOqvC231f2z+IqP0N' })
        });
      }, 2000)

    }
  },
};
</script>

<style  scoped>
#global_video {
  display: none;
}

#brand_video {
  display: none;
}
</style>
