import Vue from "vue";
let animate = null;
const diff = (el) => {
  const ele = document.querySelector(`#${el.id}`);
  if (ele.scrollWidth > ele.clientWidth) {
    animate = ele.animate(
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

    ele.style.animationPlayState = "paused";
    console.log(ele.style);
    //console.lo  g(animate.pause());
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
    const { value } = binding;
    el.innerHTML = value;
    diff(el)
  }
}

export default rolling;
Vue.directive('rolling', rolling)
