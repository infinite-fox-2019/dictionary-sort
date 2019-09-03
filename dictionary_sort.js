function dictionarySort(dictionaries) {
  var len = dictionaries.length
  for(var i=0; i<len; i++){
    for(var j=0; j<len; j++){
      if(dictionaries[j+1]<dictionaries[j]){
        var tmp = dictionaries[j]
        dictionaries[j] = dictionaries[j+1]
        dictionaries[j+1] = tmp
      }
    }
  }
  return dictionaries.join(',')
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))

module.exports = dictionarySort
