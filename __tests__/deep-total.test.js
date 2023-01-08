const deepTotal = require("../deep-total");

describe("deepTotal", () => {
  test.only("check if returns a number", () => {
    expect(typeof deepTotal([])).toBe("number");
  })
  test.only("return 0 when passed empty array", () => {
    expect(deepTotal([])).toBe(0);
  })
  test.only("returns length of flat array", () => {
    const testArr = [1,2,3,4];
    expect(deepTotal(testArr)).toBe(4);
  })
  test.only("does not count no primitives", () => {
    const testArr = [1,2,3,4,[]];
    expect(deepTotal(testArr)).toBe(4)
  })
  test.only("counts all primitives including all those inside nested arrays", () => {
    const testArr = [1,2,3,4,[5,6]];
    expect(deepTotal(testArr)).toBe(6);
  })
})