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
      test(
        curation = {
          mood: [],
          peroid: []
        },
        validateFn = () => { }) {
        console.log(curation)
        validateFn();
      }
    },
    render(createElement) {
      return createElement(component, {
        attrs: this.$attrs,
        props: {
          curationinfo: this.curationInfo,
          fn: this.test
        },
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      })
    }
  }
}
export { withCuration }
