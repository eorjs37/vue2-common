<template>
  <div class="container">
    <h1 class="h1 fw_500">TODO</h1>
    <TodoInput @inputtext="onInputText" />
    <ul class="todolist">
      <li class="todoitem" v-for="(item, index) in todolist" :key="'todo' + index">
        <TodoItem :todotext="item.text" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getTodoApi, saveTodo } from '@/api/todoapi'
import TodoInput from '@/components/todo/TodoInput.vue'
import TodoItem from '@/components/todo/TodoItem.vue'
import { reactive } from 'vue'

const todolist = reactive([])

const onInputText = async (value = '') => {
  try {
    const { status } = await saveTodo(value)
    if (status === 200) {
      todolist.push({ text: value })
    }
  } catch (error) {
    if (error.response) {
      alert('에러가 발생하엿습니다')
    }
  }
}

const getToDo = async () => {
  try {
    const { data } = await getTodoApi()
    const { result } = data
    const { todolist: resultTodoList } = result
    if (Array.isArray(resultTodoList)) {
      resultTodoList.forEach((item) => {
        todolist.push({ text: item.todo })
      })
    }
  } catch (error) {
    console.error('getToDo error : ', error)

    if (error.response) {
      //
    }
  }
}

getToDo()
</script>
<style scoped src="@/assets/styles/todo/todolist.css"></style>
