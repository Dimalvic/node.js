function add(number) {
  let sum = number;

  function innerAdd(nextNum) {
    if (nextNum !== undefined) {
      sum += nextNum;
      return innerAdd;
    } else {
      return sum;
    }
  }

  return innerAdd;
}

console.log(add(2)(5)(7)(1)(6)(5)(11)());
