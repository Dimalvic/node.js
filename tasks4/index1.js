function runSequent(array, callback) {
    return new Promise(async (resolve) => {
      const results = [];
  
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const result = await callback(item, i);
        results.push(result);
      }
  
      resolve(results);
    });
  }
  
  const array = ["one", "two", "three"];
  runSequent(array, (item, index) =>
    Promise.resolve({
      item,
      index,
    })
  )
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });