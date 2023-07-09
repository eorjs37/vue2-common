const mixin = {
  created: function () {
    console.log("mixin hook called");
  },
  data: () => {
    return {
      globalVariable: ''
    }
  },
  methods: {
    method1() {
      console.log(this.globalVariable);
    }
  }
}

export { mixin }
