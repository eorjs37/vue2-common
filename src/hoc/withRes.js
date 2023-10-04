
import axios from 'axios';
const withRes = (url, component) => {

  return {
    name: "withRes",
    props: Object.assign({}, component.props),
    data() {
      return {
        fetchedData: null
      };
    },
    async created() {
      console.log("withRes created")
      const response = await axios.get(url);
      this.fetchedData = response.data;

    },
    mounted() {
      console.log("withRes mounted")
    },
    methods: {
      test() {
        console.log("1")
      }
    },
    render(h) {
      return h(component)
    },
  }
}

export { withRes }
