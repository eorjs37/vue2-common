const withCuration = (component) => {
  return {
    name: "withCuration",
    data() {
      return {
        curationInfo: {}
      }
    },
    created() { },
    mounted() {

    },
    methods: {

    },
    render(createElement) {
      return createElement(component, {
      })
    }
  }
}
export { withCuration }
