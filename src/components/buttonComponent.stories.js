import "@/assets/styles/_variables.css"
import ButtonComponent from './ButtonComponent.vue';
import { action } from '@storybook/addon-actions'
export default{
  component:ButtonComponent,
  title:'ButtomComponent',
  tags: ['autodocs']
};

export const Default = {
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args:{
    disabled: true,
    onClick:action('on-custom-click')
  }
}

export const warning = {
  args:{
    type:'warning'
  }
}


export const danger = {
  args:{
    type:'danger'
  }
}

