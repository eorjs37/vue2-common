<template>
  <div>
    <p data-vuex="username">
      {{ username }}
    </p>

    <p data-vuex="usergreet">
      {{ greet }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigVuexComponent',

  data() {
    return {
      username: this.$store.state.userName
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
