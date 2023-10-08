<template>
  <div>
    <div class="loading" v-if="gettersIsLoading">
      <font-awesome-icon class="spinner" icon="fa-solid fa-spinner" spin-pulse />
    </div>
    <list-comp @startLoading="onStartLoading" @endLoading="onEndLoading" />
    <list-comp2 />
  </div>
</template>
<script>
import ListComp from '@/components/hocLayout/ListComp.vue';
import ListComp2 from '@/components/hocLayout/ListComp2.vue';
import { withRes } from '@/hoc/withRes';
export default {
  components: {
    'list-comp': withRes('list', ListComp),
    'list-comp2': withRes('list2', ListComp2)
  },
  methods: {
    onStartLoading() {
      console.log("onStartLoading")
    },
    onEndLoading() {
      console.log("onEndLoading")
    }
  },
  computed: {
    gettersIsLoading() {
      return this.$store.getters["hoc/getIsLoading"]
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
