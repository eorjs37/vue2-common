<template>
  <div>
    <button id="postbtn" @click="openPostCode">주소 검색 버튼</button>
    <p class="address">{{ address }}</p>
  </div>
</template>
<script>
export default {
  name: 'PostcodeView',

  data() {
    return {
      address: ''
    }
  },

  mounted() {},

  methods: {
    openPostCode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log('data : ', data)
          const { address } = data
          this.address = address
        }
      }).open()
    }
  }
}
</script>
<style scoped>
button {
  border: 2px solid white;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}

.address {
  color: #fff;
}
</style>
