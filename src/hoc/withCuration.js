const withCuration = (component) => {
  return {
    name: "withCuration",
    data() {
      return {
        curationInfo: {
          mood: [
            {
              text: "모던",
              value: 1
            },
            {
              text: "럭셔리",
              value: 2
            }
          ],
          peroid: [
            {
              text: "1990",
              value: 1
            },
            {
              text: "2000s",
              value: 2
            }
          ]
        }
      }
    },
    created() {

    },
    mounted() {
    },
    methods: {
      validation(
        curation = {
          mood: [],
          peroid: [],
          moodAlert: () => { },
          peroiAlert: () => { }
        },
        validateFn = () => { }
      ) {
        if (curation.mood.length === 0) {
          curation.moodAlert();
          return false;
        } else if (curation.peroid.length === 0) {
          curation.peroiAlert();
          return false;
        }
        validateFn();
      }
    },
    render(createElement) {
      return createElement(component, {

        props: {
          curationinfo: this.curationInfo,
          validate: this.validation
        },
      })
    }
  }
}
export { withCuration }
