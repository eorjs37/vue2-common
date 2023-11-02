<template>
  <div class="modal_container">
    <div class="modal_box">
      <div class="modal_head">
        <h1 class="title">큐레이션 설정</h1>
      </div>
      <div class="modal_body">
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
        <button @click="clickTest">테스트</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CurationComp',
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
    };
  },

  mounted() {

  },

  methods: {
    clickTest() {
      const send = {
        mood: this.mood,
        peroid: this.peroid,
        moodAlert: () => {
          alert('분위기를 선택해주세요.')
        },
        peroiAlert: () => {
          alert('시대를 선택해주세요.')
        }
      }
      this.validate(send, this.alertValidate);
    },
    alertValidate() {
      alert(`validation에 성공하였습니다.`)
    }
  },
};
</script>
<style scoped src="@/assets/styles/modal.css"></style>
