function Anagrams(str, str1) {
    
    str = str.replace(/\s/g, "").toLowerCase();
    str1 = str1.replace(/\s/g, "").toLowerCase();  
    
    if (str.length !== str1.length) {
      return false;
    }  
 
    const charCount = {};

    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }  

    for (let char of str1) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }  

    return true;
 
}

  console.log(Anagrams("act", "Cat"));
  console.log(Anagrams("true", "false"));