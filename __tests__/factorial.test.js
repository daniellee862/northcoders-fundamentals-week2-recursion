const factorialFunc = require("../factorial");

// ARRANGE ACT ASSERT

describe("factorial function tests", () => {
  //return base value

  test("return input value", () => {
    expect(factorialFunc(0)).toBe(0);
  });

  test("return factorial of input", () => {
    expect(factorialFunc(24)).toBe(24);
  });
});
