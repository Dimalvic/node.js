function add(num: number): Function {
    let sum = num;
  
    function innerAdd(nextNum: number): Function | number {
      if (nextNum === undefined) {
        return sum;
      }
  
      sum += nextNum;
      return innerAdd;
    }
  
    return innerAdd;
  }
  
  console.log(add(2)(5)(7)(1)(6)(5)(11)());