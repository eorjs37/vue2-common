<template>
  <div class="font_white" v-if="data">
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
  emits: ['startLoading', 'endLoading'],
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    id: {
      type: String,
      default: ""
    }
  },
  created() {
    this.$emit('startLoading')
    this.$emit('endLoading')
  },
  mounted() {
    console.log("ListComp mounted");
  },
  methods: {
    //test() { }
  }
}
</script>
<style scoped></style>
