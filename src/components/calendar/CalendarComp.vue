<template>
  <div id="curation_calendar">
    <vue-cal
      :disable-views="['years', 'year', 'month', 'day']"
      active-view="week"
      :hideTitleBar="true"
      :hideViewSelector="true"
      :locale="'ko'"
      :timeStep="120"
      :time-from="6 * 60"
      :time-to="30 * 60"
    >
      <template #weekday-heading="{ heading }">
        <span>{{ heading.label }}</span>
      </template>
    </vue-cal>
  </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: {
    'vue-cal': VueCal
  },
  data() {
    return {}
  }
}
</script>
<style></style>
