function dictionarySort(dictionaries) {
  for(var i = 0; i < dictionaries.length; i++) {
    for(var j = i+1; j < dictionaries.length; j++) {
      if(dictionaries[j] < dictionaries[i]) {
        var temp = dictionaries[j];
        dictionaries[j] = dictionaries[i];
        dictionaries[i] = temp;
      }
    }
  }
  return dictionaries;
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))
// module.exports = dictionarySort
