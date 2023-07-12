<template>
  <div class="container">
    <transition name="fade">
      <SelectModal v-if="modalVisible" @onclose="closeEvent"></SelectModal>
    </transition>
    <button id="modalbtn" @click="method1()">모달 클릭</button>
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
    };
  },

  mounted() {
  },

  methods: {
    closeEvent() {
      this.method2();
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
