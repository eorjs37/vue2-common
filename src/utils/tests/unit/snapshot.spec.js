import repeat from '@/utils/snapshot'
describe('snapshot unit test', () => {
  test('repeats words three times', () => {
    expect(repeat('Test', 3)).toMatchSnapshot()
  })
})
