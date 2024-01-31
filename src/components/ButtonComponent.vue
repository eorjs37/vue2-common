<template>
  <div>
    <button class="btn" :disabled="disabled">{{ btnname }}</button>
  </div>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    btnname: {
      type: String,
      default: '버튼',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped>
.btn {
  background-color: var(--D9D9D9);
  border: none;
  cursor: pointer;
}

.btn:disabled {
  opacity: .5;
  cursor: initial;
}
</style>
