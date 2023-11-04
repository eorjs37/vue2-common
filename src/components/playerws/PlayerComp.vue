<template>
  <section class="wsplayer_wrap">
    <div class="wsplayer_head">
      <span class="channel_title">채널</span>
      <span class="channel_name">스타필드 고양</span>
      <div class="equalizer">
        <span class="rythm first"></span>
        <span class="rythm second"></span>
        <span class="rythm third"></span>
        <span class="rythm fourth"></span>
        <span class="rythm five"></span>
      </div>
    </div>
    <div class="wsplayer_body">
      <div class="wscurrent_music">
        <img class="wscurrent_music_img" :src="require(`@/assets/images/wsplayer/album.jpg`)" alt="album.jpg">
        <div class="wscurrent_music_info">
          <h2 class="wscurrent_music_title">있어줘요</h2>
          <h5 class="wscurrent_music_artist">지아</h5>
          <ul class="wscurrent_music_func">
            <li class="music_func_item">
              <img class="music_func_item_img" :src="require(`@/assets/images/wsplayer/like_icon_off.svg`)"
                alt="like_icon_off">
            </li>
            <li class="music_func_item">
              <img class="music_func_item_img" :src="require(`@/assets/images/wsplayer/hate_icon_off.svg`)"
                alt="like_icon_off">
            </li>
            <li class="music_func_item">
              <img class="music_func_item_img" :src="require(`@/assets/images/wsplayer/icon_pc_comment_30.svg`)"
                alt="like_icon_off">
            </li>
            <li class="music_func_item">
              <img class="music_func_item_img" :src="require(`@/assets/images/wsplayer/icon_pc_report_30.svg`)"
                alt="like_icon_off">
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="wsplayer_footer">
      <div class="ws_play_control">
        <img :src="require(`@/assets/images/wsplayer/icon_play.svg`)" alt="icon_play">

      </div>
      <div class="volume_control">
        <img :src="require(`@/assets/images/wsplayer/volumup.svg`)" alt="volumup.svg">
        <input type="range">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PlayerComp"
}
</script>
<style scoped src="@/assets/styles/playerws/wsplayer.css"></style>
