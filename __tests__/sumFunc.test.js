const sumFunc = require("../sumFunc");

describe("sumFunc", () => {
  // Expect 0 in, 0 out
  test("return input value", () => {
    expect(sumFunc(0)).toBe(0);
  })

  // Return sum of all integers to n
  test("return correct sum of nums",() => {
    expect(sumFunc(4)).toBe(10)
  })
})