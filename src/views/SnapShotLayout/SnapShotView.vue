<template>
	<div>
		<div id="admin" v-if="ROLE === 'ADMIN'">
			관리자
		</div>
		<div id="admin" v-else-if="ROLE === 'MEMBER'">
			멤버1
		</div>
		<div id="admin" v-else-if="ROLE === 'GUEST'">
			게스트
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';


const ROLE = ref('ADMIN')

</script>