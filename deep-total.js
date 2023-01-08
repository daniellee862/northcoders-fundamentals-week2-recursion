const deepTotal = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      count++;
    } else {
      count += deepTotal(arr[i]);
    }
  }

  return count;
};

module.exports = deepTotal;
