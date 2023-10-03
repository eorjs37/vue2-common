import UsersList from '@/components/UsersListComp.vue'

export default function createListComp(componentName) {
  return {
    name: componentName,
    mounted() { },
    render(h) {
      return h(UsersList)
    }
  }
}
