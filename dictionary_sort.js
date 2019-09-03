function dictionarySort(dictionaries) {
  // your code below here...
  for (var i = 0; i < dictionaries.length-1; i++)
      if(dictionaries[i]>dictionaries[i+1])dictionaries.splice(i,2,dictionaries[i+1],dictionaries[i])
  for (var i = 0; i < dictionaries.length-1; i++)
      if(dictionaries[i] > dictionaries[i+1])return dictionarySort(dictionaries)
  return dictionaries

}

// console.log(Infinity < 'ab' , 'infinity lebih kecil dairpada a')



module.exports = dictionarySort

console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))