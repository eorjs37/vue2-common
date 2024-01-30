import ButtonComponent from './ButtonComponent.vue';

export default {
  component: ButtonComponent,
  tags: ['autodocs'],
  title: '버튼',
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}
export const Default = {

}
