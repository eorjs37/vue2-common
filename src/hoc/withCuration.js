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
          peroid: []
        },
        validateFn = () => { }
      ) {
        if (curation.mood.length === 0) {
          alert(`분위기를 선택해주세요.`);
          return false;
        } else if (curation.peroid.length === 0) {
          alert(`시대를 선택해주세요.`);
          return false;
        }
        validateFn();
      }
    },
    render(createElement) {
      return createElement(component, {
        attrs: this.$attrs,
        props: {
          curationinfo: this.curationInfo,
          validate: this.validation
        },
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      })
    }
  }
}
export { withCuration }
