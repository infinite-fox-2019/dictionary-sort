function dictionarySort(arr){
	var alphabet = "abcdefghijklmnopqrstuvwxyz"

	for(var i = 1 ; i < arr.length ; i++){
		var current = arr[i]
		for(var j = i - 1 ; j >= 0 ; j--){
			for(var k = 0 ; k < arr[j].length ; k++){
				if(arr[j][k]!==current[k]){
					if(alphabet.indexOf(arr[j][k])>alphabet.indexOf(current[k])){
            var store = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = store
					}
					break
				}
			}
		}
	}
	return arr
}

console.log(dictionarySort(["makan", "duduk", "terbang", "tidur"])); 
// duduk,makan,terbang,tidur
console.log(dictionarySort(["angga", "ani", "adi", "anggi"]));
// angga,anggi,adi,ani
module.exports = dictionarySort
