const deepIncludes = require("../deep-includes");
const deepTotal = require("../deep-total");

// 8. Implement a function that determines if an array includes a any value at particular level of nesting.

// ```js
// deepIncludes([1, 2], 3); // ---> false
// deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado"); // ---> true
// ```;

describe("deep includes tests", () => {
  test.only("checks input array is empty", () => {
    const testArr = [];
    expect(deepIncludes(testArr)).toBe(false);
  });

  test.only("check if the array contains the level specified by parameter ", () => {
    const testArr = [
      "toast",
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      [],
      "hello",
      ["avocado", ["jello", "pancakes"], ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
      ["avocado", ["chilli flakes"]],
    ];

    expect(deepIncludes(testArr, "jello")).toBe(true);
  });
});
