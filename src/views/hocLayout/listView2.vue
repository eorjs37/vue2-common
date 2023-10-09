<template>
  <ul v-if="listdata.length > 0">
    <li v-for="item in listdata" :key="item.id" class="font_white">
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ListView2',
  props: {
    listdata: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
