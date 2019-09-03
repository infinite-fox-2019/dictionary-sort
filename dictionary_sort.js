function dictionarySort(dictionaries) {
  for(var i = 0; i<dictionaries.length; i++){
    if(i !== 0){
      for(var j = i+1; j>=0; j--){
        if(dictionaries[j] <= dictionaries[j-1]){
          var swap = dictionaries[j];
          dictionaries[j] = dictionaries[j-1];
          dictionaries[j-1] = swap;
        }
      }
    }
  }
  return dictionaries;
}
var arr = ['makan', 'duduk', 'tidur', 'terbang'];
var arr2 = ['ari', 'ara', 'ani']

console.log(dictionarySort(arr));
console.log(dictionarySort(arr2));

module.exports = dictionarySort



