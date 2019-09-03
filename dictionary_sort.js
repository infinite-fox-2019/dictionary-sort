function dictionarySort(dictionaries) {
  for (var i = 0; i < dictionaries.length; i++) {
    for (var j = i+1; j < dictionaries.length;j++) {
      if (dictionaries[j] < dictionaries[i]) {
        [dictionaries[j],dictionaries[i]] = [dictionaries[i],dictionaries[j]]
      }
    }
  }
  return dictionaries.join(',');
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']));
// duduk , makan, terbang , tidur
console.log(dictionarySort(['anggi','angga','ani','adi']));
// adi,angga,anggi,ani

module.exports = dictionarySort
