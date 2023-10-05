
import axios from 'axios';
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
      this.$store.commit("hoc/setIsLoading", true)
      const response = await axios.get(url);
      this.fetchedData = response.data;
      setTimeout(() => {
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
