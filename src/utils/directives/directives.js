import Vue from "vue";

const focus = {
  bind: (el) => {
    console.log("call bind ele : ", el)
  },
  inserted: (el) => {
    console.log("call inserted ele : ", el)
    el.focus()
  },
  update: (_, binding) => {
    console.log("updated focus");
    console.log(binding)
    const { value, oldValue, arg } = binding

    console.log("oldValue : ", oldValue)
    console.log("value : ", value)
    console.log("arg : ", arg)
  },
  componentUpdated: () => {
    console.log("componentUpdated focus")
  }
}
export default focus;
Vue.directive('focus', focus)
