<template>
  <div>
    <div>
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoView',

  data() {
    return {

    };
  },

  created() {
  },

  mounted() {
  },

  methods: {

  },
};
</script>

<style scoped></style>
