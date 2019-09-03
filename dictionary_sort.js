function dictionarySort(dictionaries) {
  // your code below here...
  for(var i = 0 ; i<dictionaries.length ; i++){
      for(var j = 0 ; j<dictionaries.length-1 ; j++){
          var penampung = ''
          var k = 0
          while(true){
              if(dictionaries[j][k] == undefined){
                  break
              }
              else if (dictionaries[j+1][k] == undefined){
                  penampung = dictionaries[j]
                  dictionaries[j] = dictionaries[j+1]
                  dictionaries[j+1] = penampung
                  break
              }
              else if (dictionaries[j][k] == dictionaries[j+1][k]){
                  k++
              }
              else if (dictionaries[j][k] < dictionaries[j+1][k]){
                  break
              }
              else if (dictionaries[j][k] > dictionaries[j+1][k]){
                  penampung = dictionaries[j]
                  dictionaries[j] = dictionaries[j+1]
                  dictionaries[j+1] = penampung
                  break
              }
          }
      }
  }
  return dictionaries
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
console.log(dictionarySort(arrOfWord));

var arrOfWord1 = ['anggi', 'angga', 'ani', 'adi']
console.log(dictionarySort(arrOfWord1));

module.exports = dictionarySort
