function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        return cache[key];
      }
  
      const result = func.apply(null, args);
      cache[key] = result;
  
      return result;
    };
  }

  function sum(a, b) {
    return a + b;
  }
  
  const cachedCalc = memoize(sum);
  
  console.log(cachedCalc(2, 3));
  console.log(cachedCalc(2, 3));