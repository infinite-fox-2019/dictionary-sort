function dictionarySort(dictionaries) {
  // your code below here...
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

module.exports = dictionarySort
