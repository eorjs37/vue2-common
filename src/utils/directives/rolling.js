import Vue from "vue";

const rolling = {
  bind: (el, binding) => {
    const { value } = binding;

    console.log("value : ", value);
  },
  inserted: (el) => {
    console.log('el : ', el.scrollWidth)
  },
  update: (el, binding) => {
    console.log("updated binding : ", binding);
    console.log('el : ', el.scrollWidth)
    const { value } = binding
    console.log("value : ", value);
  }
}

export default rolling;
Vue.directive('rolling', rolling)
