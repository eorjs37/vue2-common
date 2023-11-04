<template>
  <div class="ws_recomm_wrap">
    <div class="ws_recomm_head">
      <h5 class="ws_recomm_title">현재 채널</h5>
      <ul class="ws_channel_list">
        <li class="ws_channel_item">
          <img class="ws_channel_item_img current" :src="require(`@/assets/images/wsplayer/current_channel.jpeg`)"
            alt="current_channel">
          <span class="channel_name">스타필드 고양</span>
        </li>
      </ul>
    </div>
    <div class="ws_recomm_body">
      <h5 class="ws_recomm_title">추천채널</h5>
      <ul class="ws_channel_list">
        <li class="ws_channel_item">
          <img class="ws_channel_item_img" :src="require(`@/assets/images/wsplayer/topchannel.png`)"
            alt="current_channel">
          <span class="channel_name">스타필드 고양</span>
          <p class="hot_wrap">
            <span class="hot">Hot</span>
          </p>

        </li>
        <li class="ws_channel_item">
          <img class="ws_channel_item_img" :src="require(`@/assets/images/wsplayer/recomm_channel.png`)"
            alt="current_channel">
          <span class="channel_name">스타필드 고양</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommChannel"
}
</script>
<style scoped src="@/assets/styles/player/recommchannel.css"></style>
