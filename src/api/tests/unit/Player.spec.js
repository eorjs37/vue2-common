import axios from "axios";
import Player from "@/api/Player";

jest.mock('axios')
describe('Player API Testing', () => {
  test('api/getChannelInfo testing', () => {
    const getChannelInfo = { channelId: 'channel_0048' }
    const resp = { data: getChannelInfo };

    axios.get.mockResolvedValue(resp);

    Player.getChannelInfo().then(data => expect(data).toEqual(getChannelInfo))
  });
});
