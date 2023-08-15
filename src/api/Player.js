import axios from "axios";

class Player {
  static getChannelInfo() {
    return axios.get('/api/getChannelInfo').then(resp => resp.data);
  }
}

export default Player;
