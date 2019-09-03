function dictionarySort(dictionaries) {
  for (let i = 0; i < dictionaries.length; i) {
    if (dictionaries[i] > dictionaries[i + 1]) {
      const temp = dictionaries[i + 1]
      dictionaries[i + 1] = dictionaries[i]
      dictionaries[i] = temp
      i = Math.max(0, i - 1)
    } else i++
  }
  return dictionaries
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))

module.exports = dictionarySort
