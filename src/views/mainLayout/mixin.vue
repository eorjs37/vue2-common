<template>
  <div>
    <SelectModal></SelectModal>
    mixin
  </div>
</template>

<script>
import SelectModal from '@/components/SelectModal.vue'
import { mixin } from '@/mixin/mixin'
export default {
  name: 'mainMixin',
  components: {
    SelectModal
  },
  mixins: [mixin],
  data() {
    return {

    };
  },

  mounted() {
    this.method1();
  },

  methods: {

  },
};
</script>

<style scoped></style>
