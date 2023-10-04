<template>
  <div>
    <button @click="count++">Add up</button>
    <p class="count">Total clicks: {{ count }}</p>
    <p class="foo">{{ foo }}</p>
    <transition>
      <p v-if="show">Foo</p>
    </transition>
  </div>
</template>
<script>
export default {
  emits: ["foo"],
  name: 'CounterComponent',
  props: {
    foo: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      count: 0,
      show: true
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style  scoped></style>
