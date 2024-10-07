import repeat from '@/utils/snapshot'

test('repeats words three times', async () => {
  expect(repeat('TEST', 3)).toMatchInlineSnapshot(`
    Array [
      "TEST",
      "TEST",
      "TEST",
    ]
  `)
})
