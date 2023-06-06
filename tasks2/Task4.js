function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        return cache[key];
      }
  
      const result = func(...args);
      cache[key] = result;
  
      return result;
    };
  }
  
  function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
  }
  
  const cachedCalc = memoize(sum);
  
  console.log(cachedCalc(2,2,3));
  console.log(cachedCalc(5,8,1));
  console.log(cachedCalc(2,2,10));