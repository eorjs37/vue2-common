<template>
  <div>
    <calendar-comp />
  </div>
</template>
<script>
import CalendarComp from '@/components/calendar/CalendarComp.vue'
export default {
  name: 'MainView',
  components: {
    'calendar-comp': CalendarComp
  },

  data() {
    return {}
  },

  computed: {},
  async created() {},

  mounted() {},
  unmounted() {
    //
  },

  methods: {}
}
</script>
