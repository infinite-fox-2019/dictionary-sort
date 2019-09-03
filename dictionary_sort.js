function dictionarySort(dictionaries) {
  // your code below here...
  for (var i=0; i<dictionaries.length; i++) {
    for (var j=0; j<dictionaries.length; j++) {
      if (dictionaries[j] > dictionaries[j+1]) {
        [dictionaries[j],dictionaries[j+1]] = [dictionaries[j+1],dictionaries[j]]
      }
    }
  }
  return dictionaries.join(',')
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))
module.exports = dictionarySort
