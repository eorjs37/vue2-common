<template>
  <section class="obigo_container">
    <transition name="fade">
      <nav class="nav" v-if="show">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </transition>
    <div class="contents" :class="show ? 'contents_30' : 'contents_100'">
      <h1 class="text">노래제목이 정~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~말
        길어요</h1>
    </div>
    <button class="btn" @click="show = !show">버튼</button>
  </section>
</template>
<script>
export default {
  name: 'ObigoView',

  data() {
    return {
      show: false,
      isFirstLoad: false
    };
  },

  mounted() {
    const target = document.querySelector('.text')
    const observer = new ResizeObserver((entries) => {
      //관찰중인 객체 리스트
      entries.forEach(entry => {
        console.log(entry)
      })
    });
    observer.observe(target)
    this.isFirstLoad = false;
  },

  methods: {
    resizeEvent() { }
  },
  destroyed() {

  }
};
</script>
<style scoped src="@/assets/styles/obigo.css"></style>
