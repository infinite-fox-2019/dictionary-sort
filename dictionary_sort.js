function dictionarySort(dictionaries) {
  // your code below here...
  for (var i = 0; i < dictionaries.length; i++) {
    var indexMinimum = i;
    for (var j = i; j < dictionaries.length; j++) {
      if (dictionaries[j]<dictionaries[indexMinimum]) {
        indexMinimum = j;
      }
    }
    var temp = dictionaries[i];
    dictionaries[i] = dictionaries[indexMinimum];
    dictionaries[indexMinimum] = temp;
  }
  return dictionaries.join(',');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));


module.exports = dictionarySort
