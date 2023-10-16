<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'MediaSessionView',

  data() {
    return {

    };
  },
  created() {
    if (this.$MediaSession.init()) {
      console.log("this.$MediaSession.init()")
    }
  },
  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
