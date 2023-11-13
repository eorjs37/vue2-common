<template>
  <div class="calendar_container">
    <h1 class="font_white">CalendarView</h1>
    <h2 class="font_white month_title">{{ current.month }}월</h2>
    <ul class="weekday_wrap">
      <li class="weekday_wrap_item">일</li>
      <li class="weekday_wrap_item">월</li>
      <li class="weekday_wrap_item">화</li>
      <li class="weekday_wrap_item">수</li>
      <li class="weekday_wrap_item">목</li>
      <li class="weekday_wrap_item">금</li>
      <li class="weekday_wrap_item">토</li>
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
      },
      monthArray: []
    };
  },
  created() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1 > 9 ? currentDate.getMonth() + 1 : `0${currentDate.getMonth() + 1}`
    this.current.month = month;

    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    const totalWeek = Math.ceil((lastDate.getDate() + startDate.getDay()) / 7);
    console.log(lastDate.getDate(), lastDate.getDay());
    console.log(startDate.getDate(), startDate.getDay());
    console.log(totalWeek);
    let fistDate = startDate.getDate()
    let array = [];
    for (let i = 0; i < totalWeek; i++) {

      if (i === 0) {
        let week = Array.from(Array(7), () => {
          return {
            id: '',
            isAttendence: 'N',
            value: ''
          }
        });

        for (let j = 0; j < 7; j++) {

          if (j >= startDate.getDay()) {
            week[j]['id'] = fistDate > 9 ? `D_${fistDate}` : `D_0${fistDate}`;
            week[j]['isAttendence'] = 'N';
            week[j]['value'] = fistDate
            fistDate++;
          }
        }
        array.push(week)
      } else if (i > 0 && i < totalWeek - 1) {
        let week = Array.from(Array(7), () => {
          return {
            id: '',
            isAttendence: 'N',
            value: ''
          }
        });
        for (let j = 0; j < 7; j++) {
          week[j]['id'] = fistDate > 9 ? `D_${fistDate}` : `D_0${fistDate}`;
          week[j]['isAttendence'] = 'N';
          week[j]['value'] = fistDate
          fistDate++;
        }
        array.push(week)
      } else {
        let week = Array.from(Array(7), () => {
          return {
            id: '',
            isAttendence: 'N',
            value: ''
          }
        });
        for (let j = 0; j <= lastDate.getDay(); j++) {
          week[j]['id'] = fistDate > 9 ? `D_${fistDate}` : `D_0${fistDate}`;
          week[j]['isAttendence'] = 'N';
          week[j]['value'] = fistDate
          fistDate++;
        }
        array.push(week)
      }
    }
    console.log(array);
    this.monthArray = array
  },
  mounted() { },
  methods: {

  }
}
</script>
<style scoped src="@/assets/styles/calendarview.css"></style>
