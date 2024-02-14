import "@/assets/styles/_variables.css"
import ButtonComponent from './ButtonComponent.vue';
import { action } from '@storybook/addon-actions'
export default{
  title:'ButtomComponent',
  tags: ['autodocs']
};

export const Default = () =>({
  components: { ButtonComponent },
  template: `
    <ButtonComponent btnname="버튼1" @on-custom-click="action"/>
  `,
  methods: { action: action('clicked') }
})

export const Warning = () =>({
  components: { ButtonComponent },
  template: `
    <div>
      <ButtonComponent type="warning" btnname="버튼1" @on-custom-click="action"/>
    </div>
  `,
  methods: { action: action('clicked') }
})

export const Story = () =>({
  render: () => ({
    components: { ButtonComponent },
    template:`
      <ButtonComponent type="warning" btnname="버튼1" @on-custom-click="action"/>
    `
  }),

  decorators: [() => ({ template: '<div style="margin: 3em;"><story /></div>' })],
})
