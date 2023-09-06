<template>
  <aside class="side_bar fixed h_100" :class="openStatus">
    <nav class="nav h_100">
      <h2>리스트</h2>
      <ul>
        <li>
          1
        </li>
        <li>
          2
        </li>
        <li>
          3
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script>
export default {
  props: {
    openStatus: {
      type: String,
      defalut: ""
    }
  },
  name: 'AsideComponent',

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
.side_bar {
  top: 0;
  right: 0;
  display: inline-block;
  width: 347px;
  transform: translateX(347px);
  z-index: 1;
  background-color: var(--black151515);
}

.side_bar.on {
  animation: slideInRight;
  transform: translateX(0);
  animation-duration: .5s;
}

.side_bar.off {
  animation: slideInLeft;
  animation-duration: .7s;
  right: -347px;
}

.nav {
  width: 280px;
  display: inline-block;
}
</style>
