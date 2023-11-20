import Vue from "vue";
let animate = null;
const diff = (el) => {
  if (el.scrollWidth > el.clientWidth) {
    animate = el.animate(
      [
        {
          transform: "translateX(0)"
        },
        {
          transform: "translateX(-50%)"
        }
      ], {
      duration: 3500,
      iterations: Infinity
    }
    )
  } else {
    console.log(typeof animate);
    console.log(animate);
    // if (animate) {
    //   animate.pause();
    // }
  }
}

const rolling = {
  bind: (el, binding) => {
    console.log("bind");
    const { value } = binding;
    el.innerHTML = value;
  },
  inserted: (el) => {
    console.log("inserted");
    console.log('inserted el scrollWidth : ', el.scrollWidth)
    console.log('inserted el clientWidth : ', el.clientWidth);
    diff(el)
  },
  update: (el, binding) => {
    console.log("updated binding : ", binding);
    const { value } = binding;
    el.innerHTML = value;
    diff(el)
  }
}

export default rolling;
Vue.directive('rolling', rolling)
