function dictionarySort(dictionaries) {
  //bubble sort
  for (var i = 0; i < dictionaries.length; i++) {
      for (var j = 0; j < dictionaries.length; j++) {
          if (dictionaries[j] > dictionaries[j+1]) {
              var temp = dictionaries[j];
              dictionaries[j] = dictionaries[j+1];
              dictionaries[j+1] = temp;
          }
      }
  }
  return dictionaries.join(',');
};

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));
module.exports = dictionarySort
