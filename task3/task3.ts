function deepCloning<T extends object>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const cloneArr: Array<deepCloning<T[number]>> = [];
      for (let i = 0; i < obj.length; i++) {
        cloneArr[i] = deepCloning(obj[i]);
      }
      return cloneArr as T;
    }
  
    const cloneObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloneObj[key] = deepCloning(obj[key]);
      }
    }
    return cloneObj;
  }

const obj1 = { name: 'game', genre: "MMO", ageRestriction: 16 };
const cloneObj1 = deepCloning(obj1);
console.log(cloneObj1); 
console.log(obj1 === cloneObj1); 

