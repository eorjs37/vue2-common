<template>
  <div>
    <h1 class="font_white">curationViews</h1>
    <button @click="clickTest">테스트</button>
    <ul>
      <li v-for="item in curationinfo.mood" :key="item.value">
        <label class="font_white" :for="`mood${item.value}`">{{ item.text }}</label>
        <input type="radio" v-model="mood" :value="item.value" :id="`mood${item.value}`">
      </li>
    </ul>
    <ul>
      <li v-for="item in curationinfo.peroid" :key="item.value">
        <label class="font_white" :for="`peroid${item.value}`">{{ item.text }}</label>
        <input type="checkbox" v-model="peroid" :value="item.value" :id="`peroid${item.value}`">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CurationView',
  props: {
    fn: {
      type: Function,
      default() {
        return 'Default function'
      }
    },
    curationinfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      mood: [],
      peroid: [],
    };
  },

  mounted() {

  },

  methods: {
    clickTest() {
      this.fn({
        mood: this.mood,
        peroid: this.peroid
      }, this.alertValidate);
    },
    alertValidate() {
      alert("12345")
    }
  },
};
</script>
<style scoped></style>
