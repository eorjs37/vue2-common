<template>
  <div class="modal_container">
    <div class="modal_box">
      <div class="modal_head">
        <h1 class="title">모달 제목</h1>
      </div>
      <div class="modal_body">
        <p class="desc">
          본문 내용을 입력합니다.
        </p>
      </div>
      <div class="modal_btn">
        <button class="button" @click="close()">예</button>
        <button class="button" @click="close()">아니오</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectModal',
  emits: ["onclose"],
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    close() {
      this.$emit("onclose")
    }
  },
};
</script>

<style src="@/assets/styles/modal.css"></style>
<style scoped></style>
