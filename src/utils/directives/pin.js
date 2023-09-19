import Vue from "vue";

const pin = {
  bind: (el, binding) => {
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  },
}

export default pin;

Vue.directive('pin', pin)
