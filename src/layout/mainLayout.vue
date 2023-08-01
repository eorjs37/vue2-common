<template>
  <div>
    <HeaderComponent />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterComponent />
    <FloatingComponent v-if="isShowFloating" />
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
      isShowFloating: true
    };
  },
  created() {

  },

  mounted() {
    console.log("mainlayout mounted ");
    const videoSrc = `https://stream.aplayz.co.kr/broadcast/e6c9f6356e720782f75eeaeac4b0a892.m3u8`
    this.$VideoJS.setVideo(document.querySelector('#global_video'))

    this.$VideoJS.initHls(videoSrc);

    this.$VideoJS.addEvent();

    const { name } = this.$route;
    if (name === 'video') {
      this.isShowFloating = false;
    }

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
  watch: {
    $route(to) {
      const { name } = to;
      if (name === 'video') {
        this.isShowFloating = false;
      } else {
        this.isShowFloating = true;
      }
    }
  }
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
