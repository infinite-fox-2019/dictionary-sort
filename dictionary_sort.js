function dictionarySort(dictionaries) {
  // var kamus = 'abcdefghijklmnopqrstuvwxyz'
  var temp = ''
  for (var i=0; i<dictionaries.length; i++) {
    for (var j=i+1; j<dictionaries.length; j++) {
      if (dictionaries[i] > dictionaries[j]) {
          temp = dictionaries[j]
          dictionaries[j] = dictionaries[i]
          dictionaries[i] = temp
      }
    }
  }
  return dictionaries
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'] //duduk, makan, terbang, tidur
var arrOfWord = ['anggi', 'angga', 'ani', 'adi'] //angga, anggi, adi, ani
console.log(dictionarySort(arrOfWord));

// module.exports = dictionarySort
