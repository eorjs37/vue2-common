<template>
  <div>
    <list-comp />
  </div>
</template>
<script>
import ListComp from '@/components/hocLayout/ListComp.vue';
import { withRes } from '@/hoc/withRes';
export default {
  components: {
    'list-comp': withRes('https://jsonplaceholder.typicode.com/posts/1', ListComp)
  }
}
</script>
<style scoped></style>
