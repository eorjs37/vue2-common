
const withRes = (url, component) => {
  const originalProps = Object.assign({}, component.props) || {};

  return {
    name: "withRes",
    props: originalProps,
    data() {
      return {
        fetchedData: null
      };
    },
    created() {
      this.$store.commit("hoc/setIsLoading", true)
      setTimeout(() => {
        //url
        const { data } = require(`@/assets/mocks/${url}.json`)
        this.fetchedData = data;
        this.$store.commit("hoc/setIsLoading", false)
      }, 5000);
    },
    mounted() {
    },
    methods: {
    },
    render(createElement) {
      return createElement(component, {
        props: {
          ...this.$props,
          data: this.fetchedData
        },
        on: {
          ...this.$listeners
        }
      })
    },
  }
}

export { withRes }
