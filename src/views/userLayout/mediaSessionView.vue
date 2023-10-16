<template>
  <div>

  </div>
</template>
<script>
import { list } from '@/api/NodeApi'
export default {
  name: 'MediaSessionView',

  data() {
    return {

    };
  },
  created() {
    list();
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
