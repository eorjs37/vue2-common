const mixin = {
  created: () => {
    console.log("mixin hook called");
  },
  data: () => {
    return {
      modalVisible: false
    }
  },
  methods: {
    method1() {
      this.modalVisible = true
    },
    method2() {
      this.modalVisible = false;
    }
  }
}

export { mixin }
