function dictionarySort(arr) {
  var temp = arr[0];
  for(var i = 0; i < arr.length-1; i++){
    for(var j = i+1; j < arr.length; j++){
      // Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

var arr = ['makan', 'duduk', 'tidur','terbang'];
var arr2 = ['anggi','angga','ani','adi'];
var arr3 = ['ab','aa','ac','at'];

console.log(dictionarySort(arr));
console.log(dictionarySort(arr2));
console.log(dictionarySort(arr3));

module.exports = dictionarySort
