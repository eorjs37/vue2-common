<template>
  <div>
    <button></button>
  </div>
</template>
<script>
export default {
  name: 'LifeCycleComp',

  data() {
    return {

    };
  },
  created() {
    this.testMethod();
  },

  mounted() {

  },

  methods: {
    testMethod() { }
  },
};
</script>
<style scoped></style>
