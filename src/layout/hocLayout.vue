<template>
  <div>
    <!-- <div class="loading">
      <font-awesome-icon class="spinner" icon="fa-solid fa-spinner" spin-pulse />
    </div> -->
    <list-comp @startLoading="onStartLoading" />
  </div>
</template>
<script>
import ListComp from '@/components/hocLayout/ListComp.vue';
import { withRes } from '@/hoc/withRes';
export default {
  components: {
    'list-comp': withRes('https://jsonplaceholder.typicode.com/posts/1', ListComp)
  },
  methods: {
    onStartLoading() {
      console.log("onStartLoading")
    }
  }
}
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
