<template>
  <div>
    <button data-btn="condition" @click="conditionClick(2, 1)">버튼</button>
  </div>
</template>
<script>
const Component = {
  name: 'DecisionComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    decisionClick(a, b) {
      if (a > b) {
        console.log("pass condition")
      }
      else {
        console.log("no pass")
      }
    }
  },
}
export default Component;
</script>
<style scoped></style>
