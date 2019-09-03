function dictionarySort(dictionaries) {
  
  for (var i = 0; i < dictionaries.length-1; i++) {
    
    if (dictionaries[i][0] > dictionaries[i+1][0] && dictionaries[i][0] !== dictionaries[i+1][0]) {
      [dictionaries[i], dictionaries[i+1]] = [dictionaries[i+1], dictionaries[i]];
    }
    
    if (dictionaries[i][0] === dictionaries[i+1][0]) {
      for (var j = 1; j < dictionaries.length; j++) {
        var temp = dictionaries[j];
        for (var k = j-1; k >= 0; k--) {
          if (dictionaries[k] > temp) {
            dictionaries[k+1] = dictionaries[k]
          } 
          else {
            dictionaries[k+1] = temp
            break
          }
          if (k === 0 ) {
            dictionaries[k] = temp
          } 
        }
      }
    }
  }
  return dictionaries; 
}

console.log (dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log (dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = dictionarySort
