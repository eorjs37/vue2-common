<template>
  <div class="loading">
    <font-awesome-icon class="spinner" icon="fa-solid fa-spinner" spin-pulse />
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
  computed: {

  }
};
</script>
<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 50px;
  height: 50px;
  color: var(--white);
}
</style>
