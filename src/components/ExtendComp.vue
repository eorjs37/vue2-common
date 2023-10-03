<template>
  <div>
    <div class="font_white">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: 'ExtendsComp',
  data() {
    return {
      num: 1,
      msg: 'Extendss data'
    }
  },
  created() {
    console.log('Extends created')
  },
  methods: {
    clicked() {
      alert('Extends methods')
    }
  }
}
</script>
