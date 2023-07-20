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
        <button class="button" @click="close()">{{ leftbtnname }}</button>
        <button class="button yes" @click="close()">{{ rightname }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectModal',
  emits: ["onclose"],
  props: {
    headtitle: {
      type: String,
      default: ""
    },
    bodycontents: {
      type: String,
      default: "본문내용을 입력해주세요."
    },
    leftbtnname: {
      type: String,
      default: "아니오"
    },
    rightname: {
      type: String,
      default: "예"
    },
    closefunc: {
      type: Function,
      default() {
        return 'Default function'
      }
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    close() {
      this.$emit("onclose");
      this.closefunc();
    }
  },
};
</script>

<style src="@/assets/styles/modal.css"></style>
<style scoped></style>
