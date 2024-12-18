<template>
  <div id="app">
		<HeaderComp/>
    <video id="streaming" controls hidden></video>
		<div class="container">
			<router-view />
		</div>

  </div>
</template>

<script setup>
import HeaderComp from './components/common/header/HeaderComp.vue';
</script>
