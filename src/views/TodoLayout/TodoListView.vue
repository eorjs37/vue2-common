<template>
  <div class="container">
    <h1 class="h1 fw_500">TODO</h1>
    <TodoInput @inputtext="onInputText"/>
		<ul class="todolist">
			<li class="todoitem" v-for="(item,index) in todolist" :key="'todo'+index">
					<TodoItem :todotext="item.text"/>
			</li>
		</ul>
  </div>
</template>

<script setup>
import TodoInput from '@/components/todo/TodoInput.vue'
import TodoItem from '@/components/todo/TodoItem.vue';
import { reactive } from 'vue';

const todolist = reactive([])

const onInputText = (value = '') => {
	console.log(value);

	todolist.push({text:value})
}
</script>
<style scoped src="@/assets/styles/todo/todolist.css"></style>
