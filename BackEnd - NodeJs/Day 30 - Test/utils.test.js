const { sum } = require('./utils')


test("Sum 1 and 2", () => {
  expect(sum(1, 2)).not.toBe(5)
})