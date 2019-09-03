function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0;i<dictionaries.length-1;i++) {
    for (let j = 0;j<dictionaries.length;j++) {
      if (dictionaries[j] > dictionaries[j+1]) {
        let rek = dictionaries[j];
        dictionaries[j] = dictionaries[j+1];
        dictionaries[j+1] = rek;
      }
    }
  }
  return dictionaries;
}

let arrOfWord = ['makan','duduk','tidur','terbang'];
let arrOfWord2 = ['anggi','angga','ani','adi']
console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord2))



// module.exports = dictionarySort
