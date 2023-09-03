<template>
  <header class="h_80px w_100 layout4_header bg fixed ">

    <ul class="space_between w_90 h_100 m_auto">
      <!--################# PC #################-->
      <li class="align_center header_pc">
        <img class="cursor header_pc" src="/media/img/logo.svg" alt="로고">
      </li>
      <!--################# Mobile #################-->
      <li class="align_center header_mobile ">
        <ul class="align_center h_100">
          <li>
            <img class="cursor" src="/media/img/icon_back_24.svg" alt="로고">
          </li>
          <li class="font_white">
            {{ viewName }}
          </li>
        </ul>
      </li>
      <li>
        <ul class="space_between align_center h_100">
          <li class="align_center">
            <img class="cursor" src="/media/img/alarm.png" alt="알람">
          </li>
          <li class="margin_left_60px">
            <img class="cursor" src="/media/img/toggle.svg" alt="햄버거바">
          </li>
        </ul>
      </li>
    </ul>

  </header>
</template>
<script>
export default {
  name: 'Layout4Header',

  data() {
    return {
      viewName: ""
    };
  },

  created() {
    const { meta } = this.$route;
    if (Object.keys(meta).length > 0) {
      const { viewName } = meta;
      this.setViewName(viewName)
    }
  },

  mounted() {

  },

  methods: {
    setViewName(viewname) {
      this.viewName = viewname
    }
  },

  watch: {
    $route(to) {
      const { meta } = to;
      if (Object.keys(meta).length > 0) {
        const { viewName } = meta;
        this.setViewName(viewName)
      }
    }
  }
};
</script>

<style  scoped>
.layout4_header {
  top: 0;
  left: 0;
}

.header_mobile {
  display: none;
}

.bg {
  background-color: var(--bgheader1);
}

@media (max-width: 500px) {
  .header_pc {
    display: none;
  }

  .header_mobile {
    display: inline-block;
  }
}
</style>
