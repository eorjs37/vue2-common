<template>
  <div>
    <ul v-if="data">
      <li v-for="(item) in data" :key="item.id" class="font_white">
        <span>
          {{ item.id }} : {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListComp2',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
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
<style scoped></style>
