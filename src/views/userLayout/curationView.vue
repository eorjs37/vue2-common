<template>
  <div>
    <alert-comp v-if="isvisible" :headtitle="'알림'" :bodycontents="'시대를 입력해주세요'" @close-modal="onCloseModal" />
    <h1 class="font_white">curationViews</h1>
    <button @click="clickTest">테스트</button>
    <ul>
      <li v-for="item in curationinfo.mood" :key="item.value">
        <label class="font_white" :for="`mood${item.value}`">{{ item.text }}</label>
        <input type="radio" v-model="mood" :value="item.value" :id="`mood${item.value}`">
      </li>
    </ul>
    <ul>
      <li v-for="item in curationinfo.peroid" :key="item.value">
        <label class="font_white" :for="`peroid${item.value}`">{{ item.text }}</label>
        <input type="checkbox" v-model="peroid" :value="item.value" :id="`peroid${item.value}`">
      </li>
    </ul>
  </div>
</template>
<script>
import AlertComp from '@/components/common/AlertComp.vue'
export default {
  name: 'CurationView',
  emits: ['validate'],
  components: {
    'alert-comp': AlertComp
  },
  props: {
    validate: {
      type: Function,
      default() {
        return 'Default function'
      }
    },
    curationinfo: {
      type: Object,
      default: () => {
        return {}
      }
    },

  },
  data() {
    return {
      mood: [],
      peroid: [],
      isvisible: false
    };
  },

  mounted() {

  },

  methods: {
    onCloseModal() {
      this.isvisible = false;
    },
    clickTest() {
      const send = {
        mood: this.mood,
        peroid: this.peroid
      }
      this.validate(send, this.alertValidate);
    },
    alertValidate() {
      alert(`validation에 성공하였습니다.`)
    }
  },
};
</script>
<style scoped></style>
