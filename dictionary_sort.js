function dictionarySort(dictionaries) {
  // your code below here...
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for(i=0 ; i<dictionaries.length; i++){
    for(j=0 ; j<dictionaries.length ; j++){
      if(dictionaries[j] > dictionaries[j+1]){
        var temp = dictionaries[j]
        dictionaries[j] = dictionaries[j+1]
        dictionaries[j+1] = temp
      }
    }

  }
  return dictionaries
}

console.log(dictionarySort(['l', 'z', 'm']))

console.log(dictionarySort(['annie', 'anny']))

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
// // output: duduk, makan, terbang, tidur

console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))
// //output: adi angga anggi ani

// module.exports = dictionarySort
