import Vue from "vue";
const dynamicPin = {
  bind: (el, binding) => {
    el.style.position = 'fixed';
    console.log("binding : ", binding)
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
}
export default dynamicPin;

Vue.directive('dynamicpin', dynamicPin)
