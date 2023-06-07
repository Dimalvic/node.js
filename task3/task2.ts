function areAnagrams(str: string, str1: string): boolean {
    const formattedStr = str.replace(/\s/g, '').toLowerCase();
    const formattedStr1 = str1.replace(/\s/g, '').toLowerCase();
  
    if (formattedStr.length !== formattedStr.length) {
      return false;
    }
  
    const sortedStr = formattedStr.split('').sort().join('');
    const sortedStr1 = formattedStr1.split('').sort().join('');
  
    return sortedStr === sortedStr1;
  }
  
  console.log(areAnagrams('act', 'Cat')); 
  console.log(areAnagrams('true', 'false')); 