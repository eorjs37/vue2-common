<template>
  <div class="w_100 input_wrap">
    <input class="input" @keypress.enter="inputEnter" type="text" />
    <button class="addbtn">추가</button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits(['inputtext'])

const inputEnter = ($event) => {
  if ($event.key === 'Enter') {
		if(!$event) return;
		const { target } = $event;
		const { value } = target;
    $event.preventDefault()
    emit('inputtext',value);
		$event.target.value = '';
  }
}
</script>
<style scoped>
.input_wrap {
  display: flex;
  justify-content: space-between;
}

.input {
  width: 88%;
}

.addbtn {
  width: 10%;
}
</style>
