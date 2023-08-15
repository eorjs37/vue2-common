import Users from "@/api/Users";
import axios from "axios";

jest.mock('axios')
describe('Users API testing', () => {
  test('test1', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: [{ name: 'Bob' }] };

    axios.get.mockResolvedValue(resp);

    Users.all().then(data => expect(data).toEqual(users))
  });
});
