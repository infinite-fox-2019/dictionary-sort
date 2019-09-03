function dictionarySort(dictionaries) {
  // your code below here...
  for(let i = 0 ; i < dictionaries.length; i++){
    for(let j = 0 ; j < dictionaries.length; j++){
      if (dictionaries[j] > dictionaries[j+1]) {
        let temp = dictionaries[j]
        dictionaries[j] = dictionaries[j+1]
        dictionaries[j+1] = temp
      }
    }
  }
  return dictionaries.join(',')
}

console.log(dictionarySort(['makan','duduk','tidur','terbang'])); //duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi','angga','ani','adi'])); //adi,angga,anggi,ani

module.exports = dictionarySort
