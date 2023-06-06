function deepCloning(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const clone = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepCloning(obj[key]);
      }
    }
  
    return clone;
  }
  
  const obj1 = {
    name: "Game",
    genre: "MMO",
    ageRestriction: 16

  };
  
  const obj2 = deepCloning(obj1);
  console.log(obj2);
  console.log(obj1 === obj2); 