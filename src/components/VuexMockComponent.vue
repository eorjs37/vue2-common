<template>
  <div id="greet">
    {{ greet }}
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigVuexMockComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  computed: {
    greet() {
      return this.$store.getters.getterFullName
    }
  }
};
</script>
<style scoped></style>
