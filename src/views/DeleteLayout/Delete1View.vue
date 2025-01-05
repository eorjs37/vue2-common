<template>
    <div>
        <h1>
            Delete1 View
        </h1>
        <button @click="deleteApi">삭제</button>
    </div>
</template>
<script>
export default {
  name: 'Delete1View',
  emits: ['deleteDummyApi'],
  data() {
    return {}
  },

  mounted() {
    
    
  },

  methods: {
    deleteApi(){
      this.$emit('deleteDummyApi');
    }
  }
}
</script>
