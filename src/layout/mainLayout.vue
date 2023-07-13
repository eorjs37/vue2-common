<template>
  <div>
    <HeaderComponent />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterComponent />
    <FloatingComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FloatingComponent from '@/components/FloatingComponent.vue'
export default {
  name: 'mainLayout',
  components: { HeaderComponent, FooterComponent, FloatingComponent },
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

<style  scoped></style>
