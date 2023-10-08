
const withRes = (url, component) => {
  const originalProps = component.props || {};

  //기존 props +  전달 받은 props

  return {
    name: "withRes",
    props: originalProps,
    data() {
      return {
        fetchedData: null
      };
    },
    async created() {

      await setTimeout(() => {
        const { data } = require(`@/assets/mocks/list.json`)
        this.fetchedData = data
        console.log(this.fetchedData)
      }, 5000);
      this.$store.commit("hoc/setIsLoading", true)

      await setTimeout(() => {
        this.$store.commit("hoc/setIsLoading", false)
      }, 2000);
    },
    mounted() {
      console.log("withRes mounted");
    },
    methods: {
      test() {
        console.log("1")
      }
    },
    render(createElement) {
      return createElement(component, {
        props: {
          data: this.fetchedData,
          id: "2"
        },
        on: {
          ...this.$listeners
        }
      })
    },
  }
}

export { withRes }
