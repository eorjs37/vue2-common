import repeat from '@/utils/repeat2'

test('repeats words three times', async () => {
  expect(repeat('Test', 3)).toMatchSnapshot()
})
