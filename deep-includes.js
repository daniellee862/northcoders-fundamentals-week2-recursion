//It works, needs refactoring. the answer being passed on line 15 doesnt feel neccessary

const deepIncludes = (arr, value, isTrue) => {
  if (arr.length === 0) {
    return false;
  }

  let answer = isTrue ? isTrue : false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      answer = true;
    }
    if (Array.isArray(arr[i])) {
      answer = deepIncludes(arr[i], value, answer);
    }
  }

  console.log(answer);
  return answer;
};

module.exports = deepIncludes;
