<template>
  <div class="calendar_container">
    <h1 class="font_white">CalendarView</h1>
    <h2 class="font_white month_title">{{ current.month }}월</h2>
    <ul class="weekday_wrap">
      <li class="weekday_wrap_item">월</li>
      <li class="weekday_wrap_item">화</li>
      <li class="weekday_wrap_item">수</li>
      <li class="weekday_wrap_item">목</li>
      <li class="weekday_wrap_item">금</li>
      <li class="weekday_wrap_item">토</li>
      <li class="weekday_wrap_item">일</li>
    </ul>
    <ul class="month_wrap">
      <li class="week_item">
        <ul class="week_wrap">
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
        </ul>
      </li>
      <li class="week_item">
        <ul class="week_wrap">
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
        </ul>
      </li>
      <li class="week_item">
        <ul class="week_wrap">
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
        </ul>
      </li>
      <li class="week_item">
        <ul class="week_wrap">
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
        </ul>
      </li>
      <li class="week_item">
        <ul class="week_wrap">
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
          <div class="day_wrap"></div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CalendarView",
  data() {
    return {
      current: {
        month: ''
      }
    };
  },
  created() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1 > 9 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`
    this.current.month = month;

    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    console.log(lastDate.getDate());
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    console.log(startDate.getDay());
    const totalWeek = Math.ceil((lastDate.getDate() + startDate.getDay()) / 7);
    console.log(totalWeek)
  },
  mounted() { },
  methods: {

  }
}
</script>
<style scoped src="@/assets/styles/calendarview.css"></style>
