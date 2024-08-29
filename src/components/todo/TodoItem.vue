<template>
  <div class="todoitem_wrap">
		{{ todotext }}
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
	todotext:{
		type: String,
    required: false,
    default: ''
	}
})

</script>
<style scoped>
.todoitem_wrap{
	padding: 10px;
	width: 100%;
	border: 1px solid #C5C7C5;
	font-size: 15px;
	line-height: 1;
}
</style>