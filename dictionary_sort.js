var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']


function dictionarySort(dictionaries) {

  for (let i = 0; i < dictionaries.length - 1; i++) {
    for (let j = 0; j < dictionaries.length - i - 1; j++) {
      if (dictionaries[j] > dictionaries[j + 1]) {
        let temp = dictionaries[j]
        dictionaries[j] = dictionaries[j + 1]
        dictionaries[j + 1] = temp
      }
    }
  }

  return dictionaries

}

console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord2));


module.exports = dictionarySort
