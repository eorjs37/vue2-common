import axios from "axios";
import userService from '../../UserService';
describe('UserService Testing', () => {
  test('findOne Testing', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: "Dale Seo",
      },
    });

    const user = await userService.findOne(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "Dale Seo");

  });


  test('findAll Testing', async () => {
    const returnValue = [
      { id: 1, name: "Dale" },
      { id: 2, name: "Seo" }
    ]
    axios.get = jest.fn().mockResolvedValue({
      data: {
        list: returnValue
      },
    });

    const { list } = await userService.findAll();
    expect(list).toEqual(returnValue)
  });
});
