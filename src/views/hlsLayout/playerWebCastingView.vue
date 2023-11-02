<template>
  <div>

    <div class="send_wrap">
      <input type="text" class="send_input" v-model="sendData" @keypress.enter="sendEvent">
      <button class="send_btn" @click="sendEvent">send</button>
    </div>
  </div>
</template>
<script>
import { io } from 'socket.io-client';
export default {
  name: 'PlayerWebCastingView',

  data() {
    return {
      socketClient: null,
      sendData: ""
    };
  },

  created() {
    this.socketClient = io(process.env.VUE_APP_SOCKET_URL, {
      query: {
        "user": "userA"
      }
    });
    this.socketClient.on("connect", () => {
      console.log("connection server")
    })
    this.socketClient.on("send", this.receiveEvent);
  },

  mounted() {
  },

  methods: {
    sendEvent($event) {
      const { isComposing } = $event;
      if (!isComposing) {
        this.socketClient.emit("chatmessage", this.sendData)
        this.sendData = ""
      }

    },
    receiveEvent(data) {
      console.log(data)
    }
  },
};
</script>
<style scoped>
.send_wrap {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
}

.send_wrap .send_input {
  width: 80%;
}

.send_btn {
  width: 20%;
}
</style>
