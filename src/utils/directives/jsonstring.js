import Vue from "vue";

const jsonString = {
  bind: (el, binding, vnode) => {
    console.log("call bind ele : ", el)
    var s = JSON.stringify
    el.innerHTML =
      'name: ' + s(binding.name) + '<br>' +
      'value: ' + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  },
  inserted: (el) => {
    console.log("call inserted ele : ", el)
  },
  update: () => {
    console.log("updated focus")
  },
  componentUpdated: () => {
    console.log("componentUpdated focus")
  }
}

export default jsonString;

Vue.directive('json', jsonString)
