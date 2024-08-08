import { h } from 'vue'

export const getText = (wrappedComponent) => {
  return {
    render() {
      return h(wrappedComponent)
    }
  }
}
