<template>
  <div>
    <button class="accordion" @click="activeList[0]['isActive'] = !activeList[0]['isActive']">
      Section 1
    </button>

    <Transition name="accordiontransiton">
      <div class="panel" v-if="activeList[0]['isActive']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </Transition>

    <button class="accordion" @click="activeList[0]['isActive'] = !activeList[0]['isActive']">
      Section 2
    </button>
    <div class="panel" v-if="activeList[1]['isActive']">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <button class="accordion" @click="activeList[0]['isActive'] = !activeList[0]['isActive']">
      Section 3
    </button>
    <div class="panel" v-if="activeList[2]['isActive']">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const activeList = reactive([
  {
    isActive: false
  },
  { isActive: false },
  { isActive: false }
])
</script>
<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.panel {
  padding: 0 18px;
  background-color: white;
  height: 100px;
}

.accordiontransiton-enter-to {
  height: 0;
}

.accordiontransiton-enter-active {
  max-height: 100px;
  overflow: hidden;
  transition: max-height 10s ease-out;
}
</style>
