const withHoc = (url, component) => {
  return {
    name: "witHoc",
    data() {
      return {
        hocData: []
      }
    },
    created() {
      const { data } = require(`@/assets/mocks/${url}.json`)
      this.hocData = data;
    },
    mounted() {

    },
    methods: {

    },
    render(createElement) {
      return createElement(component, {
        props: {
          listdata: this.hocData
        }
      })
    }
  }

}

export { withHoc }
