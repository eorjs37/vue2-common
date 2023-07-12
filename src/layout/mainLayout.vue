<template>
  <div>
    <HeaderComponent />
    <section class="section">
      <router-view></router-view>
    </section>

  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  name: 'mainLayout',
  components: { HeaderComponent },
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

<style  scoped>
.section {
  margin-top: 70px;
}
</style>
