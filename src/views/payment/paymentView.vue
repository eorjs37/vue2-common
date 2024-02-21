<template>
  <div>
    <span id="price">{{ price }}</span>
    <div>
      <button id="saleBtn" @click="saleBtn(10)">할인율 버튼</button>
    </div>
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
    saleBtn(val = 10) {
      const disCount = this.price * (val / 100)
      this.price = this.price - disCount
    },
    discountBtn() {}
  }
}
</script>
<style scoped src="@/assets/styles/payment.css"></style>
