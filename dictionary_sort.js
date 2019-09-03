function dictionarySort(dictionaries) {
//selection sort

  for(var i =0; i<dictionaries.length; i++){
    var min = dictionaries[i]
    var index = -1
    for(var j = i+1; j<dictionaries.length; j++){
      if(dictionaries[j] < min){
        min = dictionaries[j]
        index = j
      }
    }
    if(dictionaries[i] > dictionaries[index]){
      var temp = dictionaries[index]
      dictionaries[index] = dictionaries[i]
      dictionaries[i] = temp
    }
  }
  return dictionaries
}
console.log(dictionarySort(['makan','duduk','tidur','terbang']))
console.log(dictionarySort(['anggi','angga','ani','adi']))
module.exports = dictionarySort



//bubble sort

// function dictionarySort(dictionaries) {
//   for(var i =0; i<dictionaries.length; i++){
//     for(var j = i+1; j<dictionaries.length; j++){
//       if(dictionaries[i] > dictionaries[j]){
//         var temp = dictionaries[j]
//         dictionaries[j] = dictionaries[i]
//         dictionaries[i] = temp
//       }
//     }
//   }
// return dictionaries
// }

//insertion
//   for(var i = 1; i<dictionaries.length; i++){
//     var start = dictionaries[i]
//     for(var j = i-1; j>=0; j--){
//       if(dictionaries[j] > start){
//         var temp = dictionaries[j+1]
//         dictionaries[j+1] = dictionaries[j]
//         dictionaries[j] = temp
//       }
//     }
//   }
//   return dictionaries
// }