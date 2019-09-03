function dictionarySort(dictionaries) {
  // your code below here...
  for( var i = 0; i < dictionaries.length; i++){
      if(dictionaries[i] > dictionaries[i+1]){
          var tempSwap = dictionaries[i]
          dictionaries[i] = dictionaries[i+1]
          dictionaries[i+1] = tempSwap
      }
  }
  return dictionaries
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

module.exports = dictionarySort
