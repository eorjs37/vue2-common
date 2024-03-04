<template>
  <div>
    <alert-comp v-if="isOpen" :headtitle="'Title'" :bodycontents="'BodyContents'" />
    <ul>
      <li>
        <label for="value1"></label>
        <input type="checkbox" value="1" id="value1" v-model="selectbox" />
      </li>
      <li>
        <label for="value2"></label>
        <input type="checkbox" value="2" id="value2" v-model="selectbox" />
      </li>
      <li>
        <label for="value3"></label>
        <input type="checkbox" value="3" id="value3" v-model="selectbox" />
      </li>
      <li>
        <label for="value4"></label>
        <input type="checkbox" value="4" id="value4" v-model="selectbox" />
      </li>
    </ul>
    <ul>
      <li v-for="item in getList1" :key="item.key">
        <label :for="'key' + item.key">{{ item.value }}</label>
        <input type="checkbox" :id="'key' + item.key" :value="item.key" v-model="selectbox2" />
      </li>
    </ul>
    <button id="validateBtn" @click="validate">validate</button>
    <button id="validateBtn2" @click="validate2">validateBtn2</button>

    <input type="text" @keyup.enter="openAlert" />
  </div>
</template>
<script>
import AlertComp from '@/components/common/AlertComp.vue'
export default {
  name: 'InsertView',
  components: {
    'alert-comp': AlertComp
  },
  data() {
    return {
      selectbox: [],
      selectbox2: [],
      isOpen: false
    }
  },

  mounted() {},

  methods: {
    openAlert() {},
    validate() {
      if (this.selectbox.length === 0) {
        alert('값을 선택해주세요')
      }
    },
    validate2() {
      if (this.selectbox2.length === 0) {
        alert(`값을 선택해주세요`)
      }
    }
  },
  computed: {
    getList1() {
      return this.$store.getters['common/getList1']
    }
  }
}
</script>
