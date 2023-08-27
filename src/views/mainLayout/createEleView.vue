<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'CreateEleView',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    testMethod() {
      const newAtag = document.createElement('a');
      newAtag.href = "https://aplayz.co.kr";
      newAtag.click();
    }
  },
};
</script>
<style scoped></style>
