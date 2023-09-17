<template>
  <aside class="side_bar fixed h_100">
    <!--####################### PC Nav #######################-->
    <nav class="nav h_100 ml_80px mt_80px pc_nav">
      <figure class="flex_end" @click="$emit('closeaside')">
        <img class="cursor" @click="$emit('closeaside')" :src="require(`@/assets/images/aside/icon_close_24.svg`)"
          alt="닫기">
      </figure>
      <ul class="mt_13px">
        <li class="flex space_between">
          <span class="email font_white">chleorjs37@gmail.com</span>
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_setting.svg`)" alt="설정">
          </figure>
        </li>
      </ul>
      <ul class="mt_63px">
        <li class="flex mb_24px">
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_icon1.svg`)" alt="설정">
          </figure>

          <span class="align_center email font_white ml_13px">마이스페이스</span>
        </li>

        <li class="flex">
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/ic_menu_mymusic.svg`)" alt="설정">
          </figure>

          <span class="align_center email font_white ml_13px">마이뮤직</span>
        </li>
      </ul>
    </nav>
    <!--####################### Mobile Nav #######################-->
    <nav class="mobile_nav">
      <div class="info_box">
        <div class="title_box space_between mt_13px mb_24px">
          <h2 class="align_center font_white mobile_menu_title font_500">메뉴</h2>
          <figure class="align_center" @click="$emit('closeaside')">
            <img class="cursor" :src="require(`@/assets/images/aside/icon_close_24.svg`)" alt="닫기">
          </figure>
        </div>

        <div class="mobile_email space_between">
          <h2 class="align_center font_white mobile_menu_title">chleorjs37@gmail.com</h2>
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_setting.svg`)" alt="닫기">
          </figure>
        </div>
      </div>
      <div class="bar"></div>

      <div class="mobile_menu_box">
        <ul class="menu_row w_100 mt_30px">
          <li class="menu_item align_center">
            <figure>
              <img :src="require(`@/assets/images/aside/myspace.svg`)" alt="마이스페이스">
            </figure>
            <span class="font_white menu_item_name">마이스페이스</span>
          </li>
          <li class="menu_item align_center">
            <figure>
              <img :src="require(`@/assets/images/aside/mymusic.svg`)" alt="마이뮤직">
            </figure>
            <span class="font_white menu_item_name">마이뮤직</span>
          </li>
          <li class="menu_item align_center">
            <figure>
              <img :src="require(`@/assets/images/aside/product_introduce.svg`)" alt="이용권소개">
            </figure>
            <span class="font_white menu_item_name">이용권소개</span>
          </li>
        </ul>
        <ul class="menu_row w_100 mt_30px">
          <li class="menu_item align_center">
            <figure>
              <img :src="require(`@/assets/images/aside/event.svg`)" alt="이벤트">
            </figure>
            <span class="font_white menu_item_name">이벤트</span>
          </li>
          <li class="menu_item align_center">
            <figure>
              <img :src="require(`@/assets/images/aside/inquiry.svg`)" alt="고객센터">
            </figure>
            <span class="font_white menu_item_name">고객센터</span>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
<script>
export default {
  props: {
    openstatus: {
      type: String,
      defalut: ""
    }
  },
  emits: ['closeaside'],
  name: 'AsideComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped src="@/assets/styles/aside.css"></style>
