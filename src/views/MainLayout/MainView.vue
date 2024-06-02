<template>
  <div>
    <calendar-comp/>
  </div>
</template>
<script>
import CalendarComp from '@/components/calendar/CalendarComp.vue'
export default {
  name: 'MainView',
  components:{
    'calendar-comp':CalendarComp
  },
  async created() {
  },

  data() {
    return{
         
    }
  },

  mounted() {
  },

  methods: {
  },

  computed: {
  },
  destroyed() {
  }
}
</script>
