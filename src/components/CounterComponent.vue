<template>
  <div>
    <button @click="count++">Add up</button>
    <p>Total clicks: {{ count }}</p>
  </div>
</template>
<script>
export default {
  emits: ["foo"],
  name: 'CounterComponent',

  data() {
    return {
      count: 0
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style  scoped></style>
