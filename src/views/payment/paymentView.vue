<template>
  <div>
    <span id="price">{{ price }}</span>
  </div>
</template>
<script>
export default {
  name: 'PaymentLayout',

  data() {
    return {
      price: 2200
    }
  },

  mounted() {},

  methods: {
    pay() {}
  }
}
</script>
<style scoped src="@/assets/styles/payment.css"></style>
