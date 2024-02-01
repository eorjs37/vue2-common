import ButtonComponent from './ButtonComponent.vue';
import "@/assets/styles/_variables.css"
export default {
  component: ButtonComponent,
  tags: ['autodocs'],
  title: '버튼',
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}
export const DefaultButton = {
  render: () => ({
    components: { ButtonComponent },
    template: `<ButtonComponent btnname="테스트 버튼" disabled=true/>`
  })
}

export const DisabledButton = {
  render: () => ({
    components: { ButtonComponent },
    template: `
      <div>
        <ButtonComponent btnname="일반버튼"/>
        <ButtonComponent type="danger" btnname="위험"/>
        <ButtonComponent type="warning" btnname="경고"/>
      </div>
      `
  })
}
