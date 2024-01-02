describe('Name of the group', () => {
  test('should ', async () => {
    jest.useFakeTimers();
    let counter = 0;
    setTimeout(() => {
      counter++;
    }, 10000);

    setTimeout(() => {
      expect(counter).toBe(1);
    }, 10000);
    jest.runAllTimers();
  });
});
