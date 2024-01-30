# Storybook

## 컴퍼넌트 StoryBook 작성

### 컴퍼넌트 작성
```html
<template>
  <div class="list-item">
    <label for="title" :aria-label="task.title">
      <input type="text" readonly :value="task.title" id="title" name="title" />
    </label>
  </div>
</template>
<script>
export default {
  name: 'StorybookView',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: '', state: '', title: '' }),
      validator: (task) => ['id', 'state', 'title'].every((key) => key in task)
    }
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>

```


### storybook 작성
```javascript
import { action } from '@storybook/addon-actions';

import StoryBookView from './storybookView.vue';

export default {
  component: StoryBookView,
  title: '스토리북', //  컴퍼넌트 제목
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

//사용자 액션에 따른 UI 변경 이벤트 등록
export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};


```
