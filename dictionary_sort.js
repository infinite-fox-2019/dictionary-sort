function dictionarySort(arr) {
  // your code below here...
  for(var i = 1; i < arr.length; i++){
    var temp = arr[i]
    for(var j = i; j >= 0; j--){
      if(temp < arr[j]){
        var tampung = arr[j]
        arr[j] = temp
        arr[j+1] = tampung
      }
    }
    // console.log(arr)
  }
  return arr

}

// console.log(Infinity < 'ab' , 'infinity lebih kecil dairpada a')



module.exports = dictionarySort

console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))