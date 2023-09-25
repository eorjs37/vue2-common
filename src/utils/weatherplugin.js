const weatherPlugin = {

  setWeather(className = "morning") {
    const body = document.querySelector('body');
    body.classList.add(className);
  },
  removeWeather() {
    const body = document.querySelector('body');
    body.className = ''
  }
}
export { weatherPlugin }
