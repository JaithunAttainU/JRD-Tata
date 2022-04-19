const { isOdd, maketoLower } = require('./app')


test('Check if 3 is odd', () => {
  expect(isOdd(3)).toBe(true)
})

test('Check if 4 is odd', () => {
  expect(isOdd(4)).toBe(false)
})

test('Check if -4 is odd', () => {
  expect(isOdd(-4)).toBe(false)
})

// test('Invalid num', () => {
//   expect(isOdd("abc")).toBe("Invalid Param")
// })

test("Invalid Param Error", () => {
  expect(
    () => isOdd([3, 45])
  ).toThrow(Error)
})

test("Invalid Param Error", () => {
  expect(
    () => isOdd("Abc")
  ).toThrow(Error)
})

test("Invalid Param Error with msg", () => {
  expect(
    () => isOdd([3, 45])
  ).toThrow("Invalid Param, it is object")
})

test("Invalid Param Error", () => {
  expect(
    () => isOdd("Abc")
  ).toThrow("Invalid Param, it is string")
})

describe('Test for maketoLower', () => {
  test("makeToLower", () => {
    const arr = ['Abhishek', 'AKHILESH', 'DhIRaj']
    expect(maketoLower(arr)).toEqual(['abhishek', 'akhilesh', 'dhiraj'])
  })

  test("makeToLower", () => {
    const arr = ['Abhishek', 'AKHILESH', 'DhIRaj']
    expect(maketoLower(arr)).toEqual(expect.arrayContaining(['akhilesh', 'dhiraj']))
  })

})
