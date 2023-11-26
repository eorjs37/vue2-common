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
      duration: 5500,
      iterations: Infinity
    }
    );
    console.log(animate);
  } else {

    el.style.animationPlayState = "paused";
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
    // console.log('inserted el scrollWidth : ', el.scrollWidth)
    // console.log('inserted el clientWidth : ', el.clientWidth);
    diff(el)
  },
  update: (el, binding) => {
    console.log("updated binding : ", binding);
    // const { value } = binding;
    // el.innerHTML = value;
    // diff(el)
  },
  componentUpdated: (el, binding) => {
    console.log("componentUpdated binding : ", binding);
  },
  unbind: () => {
    console.log("unbind");
  }
}

export default rolling;
Vue.directive('rolling', rolling)
