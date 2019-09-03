function dictionarySort(dictionaries) {
  // your code below here...
  var input = dictionaries;
  for(let i=0; i<input.length; i++){
    for(let j=0; j<input.length; j++){
      if(input[i]<input[j]){
        let tampung = input[j];
        input[j] = input[i];
        input[i] = tampung;
      }
    }
  }
  return input.toString();
}

module.exports = dictionarySort


//test case 

console.log(dictionarySort(['makan','duduk','tidur','terbang'])) // duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi','angga','ani','adi'])) // angga,anggi,adi,ani