const sumFunc = (num) => {

  if(num === 0){
    return 0;
  }

  let nextStep = num -1;

  return num + sumFunc(nextStep);
}

module.exports  = sumFunc;