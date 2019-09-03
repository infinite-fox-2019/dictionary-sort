function dictionarySort(dictionaries) {
  for(var i = 1; i < dictionaries.length; i++) {
    var currentElement = dictionaries[i];
    for(var j = i - 1; j >= 0; j--) {
      if(dictionaries[j] > currentElement) {
        dictionaries[j + 1] = dictionaries[j];
        dictionaries[j] = currentElement;
      }
    }
  }
  return dictionaries;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
console.log(dictionarySort(['delta', 'beta', 'alpha', 'charlie']));
console.log(dictionarySort([]));
module.exports = dictionarySort
