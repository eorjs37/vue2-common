<template>
  <div>
    <button :disabled="loading" @click="getPosts">Get posts</button>
    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'AxiosComponent',

  data() {
    return {
      posts: null,
      loading: null
    };
  },

  mounted() {

  },

  methods: {
    async getPosts() {
      this.loading = true
      this.posts = await axios.get("/api/posts")
      this.loading = null

    }
  },
};
</script>
<style  scoped></style>
