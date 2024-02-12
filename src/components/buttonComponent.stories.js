import "@/assets/styles/_variables.css"
import ButtonComponent from './ButtonComponent.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: ButtonComponent,
  tags: ['autodocs'],
  title: '버튼',
  argTypes:{
      onClick: action('clicked')
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}
export const Default = {
   args:{
        btnname:'버튼'
   }
}

export const ColorButton = {
  render:()=>({
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
