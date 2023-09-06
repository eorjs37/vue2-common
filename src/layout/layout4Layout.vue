<template>
  <div>
    <layout4-header @openaside="onOnopenaside" v-click-outside="onCloseAside" />
    <aside-component :openStatus="openStatus" />
    <main class="layout4_main">
      <router-view />
    </main>
  </div>
</template>
<script>
import Layout4Header from '@/components/layout4Layout/Layout4HeaderComponent.vue';
import AsideCompont from '@/components/layout4Layout/AsideComponent.vue';
import ClickOutside from 'vue-click-outside'
export default {

  name: 'Layout4Layout',
  directives: {
    ClickOutside
  },
  components: {
    'layout4-header': Layout4Header,
    'aside-component': AsideCompont
  },
  data() {
    return {
      openStatus: ""
    };
  },

  mounted() {

  },

  methods: {
    onOnopenaside() {
      this.openStatus = "on"
    },
    onCloseAside() {
      if (this.openStatus === 'on') {
        this.openStatus = 'off'
      }
    }
  },
};
</script>
<style scoped>
.layout4_main {
  margin-top: 80px;
}
</style>
