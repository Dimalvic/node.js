function arrayChangeDelete<T>(array: T[], rule: (item: T) => boolean): T[] {
    const deletedElements: T[] = [];
  
    for (let i = array.length - 1; i >= 0; i--) {
      const item = array[i];
  
      if (rule(item)) {
        array.splice(i, 1);
        deletedElements.unshift(item);
      }
    }
  
    return deletedElements;
  }
  
  const array = [3, 4, 5, 6, 7, 9];
  const deletedElements = arrayChangeDelete(array, (item) => item % 2 === 0);
  
  console.log(array); 
  console.log(deletedElements); 