<template>
  <div>
    <layout4-header />
    <aside-component />
    <main class="layout4_main">
      <router-view />
    </main>
  </div>
</template>
<script>
import Layout4Header from '@/components/layout4Layout/Layout4HeaderComponent.vue';
import AsideCompont from '@/components/layout4Layout/AsideComponent.vue';
export default {

  name: 'Layout4Layout',
  components: {
    'layout4-header': Layout4Header,
    'aside-component': AsideCompont
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
.layout4_main {
  margin-top: 80px;
}
</style>
