import Vue from "vue";
import axios from 'axios';
const withRes = (url, component) => {
  return Vue.component('withRes', {
    data() {
      return {
        fetchedData: null
      };
    },
    async created() {
      const response = await axios.get(url);
      this.fetchedData = response.data;
    },
    render(createElement) {
      return createElement(component, {
        props: {
          data: this.fetchedData
        }
      })
    },
  })
}

export { withRes }
