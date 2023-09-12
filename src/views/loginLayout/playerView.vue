<template>
  <player-slot></player-slot>
</template>

<script>
import PlayerSlot from '@/slot/playerSlot.vue'
export default {
  name: "playerView",
  components: {
    'player-slot': PlayerSlot
  },
  data() {
    return {

    }
  }
}
</script>
