<template>
  <aside class="side_bar on fixed h_100">
    <nav class="h_100">
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
  width: 200px;
  transform: translateX(200px);
  z-index: 1;
  background-color: var(--black151515);
}

.side_bar.on {
  transform: translateX(0);
}
</style>
