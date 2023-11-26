import Vue from "vue";

const rollingpractice = {
  //최초 한 번 호출될때
  bind: (el, binding) => {
    console.log("bind");
    console.log("bind el : ", el);
    const { value } = binding;
    el.innerHTML = value;
  },
  //바인딩된 Element가 Dom에 삽입됐을때
  inserted: (el = document.createElement('h1')) => {
    console.log("inserted");
    console.log("inserted el : ", el);
    console.log("el clientWidth:  ", el.clientWidth);
    console.log("el scrollWidth:  ", el.scrollWidth);
    let animate = null || el.an;
    const { scrollWidth, clientWidth } = el;
    if (clientWidth < scrollWidth) {
      el.style.overflow = `visible`;
      animate = el.animate([
        { transform: "translate(0%)" },
        { transform: "translate(-100%)" }
      ], {
        duration: 5000,
        iterations: Infinity
      });
    } else {
      console.log(animate);
    }
  },
  //바인딩된 값이 업데이트 될때
  update: (el, binding) => {
    console.log("update");
    const { value } = binding;
    el.innerHTML = value;
  },
  unbind: () => {
    console.log("unbind");
  }
}

export default rollingpractice;
Vue.directive('rollingpractice', rollingpractice)
