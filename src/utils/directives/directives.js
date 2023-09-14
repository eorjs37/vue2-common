import Vue from "vue";

const focus = {
  bind: (el) => {
    console.log("call bind ele : ", el)
  },
  inserted: (el) => {
    el.focus()
  },
  update: () => {
    console.log("updated focus")
  },
  componentUpdated: () => {
    console.log("componentUpdated focus")
  }
}
export default focus;
Vue.directive('focus', focus)
