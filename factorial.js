const factorialFunc = (num) => {
  //BASE CASE
  if (num === 1 || num === 0) {
    return num;
  }

  //STEP
  const nextStep = num - 1;

  //RECURSIVE CALL
  factorialFunc(nextStep);
  console.log(num);
  return num;
};

module.exports = factorialFunc;
