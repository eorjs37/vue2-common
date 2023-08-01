<template>
  <div class="container mt_80px">
    <transition name="fade">
      <SelectModal v-if="modalVisible" :headtitle="modalData.title" :bodycontents="modalData.contents"
        :closefunc="modalData.modalCallback" @onclose="closeEvent"></SelectModal>
    </transition>
    <button id="modalbtn" @click="modalClick1">모달 클릭</button>
    <button id="modalbtn" @click="modalClick2">모달 클릭2</button>
    <button @click="playMusic">play</button>
    <button @click="pauseMusic">pause</button>
  </div>
</template>

<script>
import SelectModal from '@/components/SelectModal.vue'
import { mixin } from '@/mixin/mixin'
export default {
  name: 'mainMixin',
  components: {
    SelectModal
  },
  mixins: [mixin],
  data() {
    return {
      modalCallback: () => {
        console.log("default modalCallback");
      },
      modalData: {
        title: "",
        contents: "",
        modalCallback: () => {
          console.log("default modalCallback");
        },
      }
    };
  },
  created() {
    this.$BrandVideoJS.addCronJob('temp')
  },
  mounted() {
  },
  methods: {
    playMusic() {
      this.$VideoJS.onPlay();
    },
    pauseMusic() {
      this.$VideoJS.onPause();
    },
    closeEvent() {
      this.modalVisible = false;
    },
    onCloseModal1() {
      alert("onClose1")
    },
    onCloseModal2() {
      alert("onClose2")
    },
    modalClick1() {
      this.modalData = {
        title: "제목1",
        contents: "본문내용",
        modalCallback: this.onCloseModal1
      }

      this.modalVisible = true;
    },
    modalClick2() {
      this.modalData = {
        title: "제목2",
        contents: "본문내용2",
        modalCallback: this.onCloseModal2
      }
      this.modalVisible = true;
    }
  },
};
</script>

<style scoped></style>
