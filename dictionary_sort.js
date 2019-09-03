function dictionarySort(dictionaries) {
  for (var i = 0; i<dictionaries.length;i++){
    for (var j = i ; j>=0;j--){
      if (dictionaries[j+1]<dictionaries[j]){
        var temp = dictionaries[j];
        dictionaries[j] = dictionaries[j+1];
        dictionaries[j+1] =temp;
      }
    }
  }
  return dictionaries.join(",");

}

var arrOfWord1 = ["makan","duduk","tidur","terbang"];
var arrOfWord2 = ["anggi","angga","ani","adi"]

console.log(dictionarySort(arrOfWord1));
console.log(dictionarySort(arrOfWord2));
module.exports = dictionarySort
