function dictionarySort(dictionaries) {
  // your code below here...
  let arr = dictionaries
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i+1; j < arr.length; j++) {
      if(arr[minIndex] > arr[j]) minIndex = j
    }
    if(i !== minIndex) {
      let swap = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = swap
    }      
  }
  return arr
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']))
module.exports = dictionarySort
