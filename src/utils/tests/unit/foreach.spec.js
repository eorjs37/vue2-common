import { forEach } from '../../foreach';
const mockCallBack = jest.fn(x => 42 + x);
describe('ForEach mock testing', () => {
  test('test1', async () => {
    forEach([0, 1], mockCallBack);

    //mockCallBack 몇번 호출됐는지 확인
    expect(mockCallBack.mock.calls).toHaveLength(2);

    //매개변수 첫번째 값 확인
    expect(mockCallBack.mock.calls[0][0]).toBe(0);

    //매개변수 2번째 값 확인
    expect(mockCallBack.mock.calls[1][0]).toBe(1);

    //mockCallBack의 리턴된 값 확인
    expect(mockCallBack.mock.results[0].value).toBe(42)

  });

  test('mockReturn Value', async () => {
    const myMock = jest.fn();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
  });
});
