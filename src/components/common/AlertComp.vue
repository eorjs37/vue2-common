<template>
  <div class="modal_container">
    <div class="modal_box">
      <div class="modal_head" v-if="headtitle">
        <h1 class="title">{{ headtitle }}</h1>
      </div>
      <div class="modal_body" :class="headtitle ? 'has_title' : ''">
        <p class="desc">
          {{ bodycontents }}
        </p>
      </div>
      <div class="modal_btn">
        <button class="button" @click="closeModal">확인</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigAlertComp',
  emits: ['close-modal'],
  props: {
    headtitle: {
      type: String,
      default: ""
    },
    bodycontents: {
      type: String,
      default: "본문내용을 입력해주세요."
    },
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  },
};
</script>
<style scoped src="@/assets/styles/modal.css"></style>
<style scoped src="@/assets/styles/alert.css"></style>
