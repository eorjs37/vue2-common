<template>
  <header class="h_80px w_100 layout4_header bg fixed ">

    <ul class="space_between w_90 h_100 m_auto">
      <!--################# left #################-->
      <!--###### menu left PC ######-->
      <li class="align_center header_pc">
        <img class="cursor header_pc" :src="require(`@/assets/images/${getLogoUrl}`)" alt="로고">
      </li>
      <!--######  menu left Mobile ######-->
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
          <li class="align_center mr_60px space_name">
            <img class="cursor mr_10px" :src="require(`@/assets/images/header_shop.png`)" alt="스페이스">

            <span class="font_white">스타필드 고양</span>
          </li>
          <li class="align_center">
            <img class="cursor" src="/media/img/alarm.png" alt="알람">
          </li>
          <li class="ml_60px hambuger_bar">
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
      viewName: "",
      routeName: ""
    };
  },

  created() {
    const { meta, name } = this.$route;
    this.routeName = name;
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
      const { meta, name } = to;
      this.routeName = name;
      if (Object.keys(meta).length > 0) {
        const { viewName } = meta;
        this.setViewName(viewName)
      }
    }
  },

  computed: {
    getLogoUrl() {
      if (this.routeName === "eventview") {
        return `logo_white.svg`
      }
      return `logo.svg`;
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

  .space_name {
    display: none;
  }

  .hambuger_bar {
    margin-left: 24px;
  }
}
</style>
