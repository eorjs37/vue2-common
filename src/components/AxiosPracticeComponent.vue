<template>
  <div>
    <button id="btn" @click="getList">리스트 호출 버튼</button>
    <button id="btn2" @click="getNestedApiCall">중첩 API 버튼</button>
    <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'AxiosPracticeComponent',

  data() {
    return {
      posts: null
    };
  },

  mounted() {

  },

  methods: {
    getList() {
      axios.get("/api/posts")
        .then(res => {
          this.posts = res;
        })
    },
    async getNestedApiCall() {
      await axios.get("/api/posts");

      await axios.get("/api/posts2");
    }
  },
};
</script>
<style scoped></style>
