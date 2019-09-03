function dictionarySort(dictionaries) {
for (var i = 0; i < dictionaries.length;i++){
  for (var j = 0; j < dictionaries.length;j++){
    if (dictionaries[i]<dictionaries[j]){
      var x = dictionaries[i]
      dictionaries[i] = dictionaries[j]
      dictionaries[j] = x
    }
  }
}
return dictionaries;
}

var arr1 = ['makan','duduk','tidur','terbang']
var arr2 = ['anggi','angga','ani','adi']

console.log(dictionarySort(arr1))
console.log(dictionarySort(arr2))

module.exports = dictionarySort
