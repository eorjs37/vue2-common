const MyGlobal = {
  install(Vue, options) {
    //전역 메소드
    Vue.prototype.$myGlobalMethod = () => {
      console.log("어디서나 호출 가능");
    }
  }
}


export { MyGlobal }
