function dictionarySort(dictionaries) {
  
  var store = 0;
  for (var i=0; i<dictionaries.length; i++){
    for (var j=0; j<dictionaries.length; j++){
      if (dictionaries[i] < dictionaries[j]){
        store = dictionaries[i];
        dictionaries[i] = dictionaries[j];
        dictionaries[j] = store;
      }
    }
  }
  return dictionaries;
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
var arrOfWord1 = ['anggi', 'angga', 'ani', 'adi']

console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord1));

module.exports = dictionarySort
