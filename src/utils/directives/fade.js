import Vue from "vue";


const fade = {
  bind: (el, binding) => { },
  inserted: (el) => {
    console.log("call inserted ele : ", el)
  },
  update: () => {
    console.log("updated fade")
  },
}

export default fade;

Vue.directive('fade', fade)
