/*SORT */

function sort(input){

    
    for(var i=0; i<input.length; i++){
        //console.log(input[i])
        var minIndex=i
        for(var j=i+1; j<input.length; j++){
            //console.log(input[minIndex],input[j])
            if(input[j]<input[minIndex]){
                minIndex=j
            }
        }
        
        //console.log(input[minIndex])
        var swap = input[i]
        input[i] = input[minIndex]
        input[minIndex] = swap

    
    }
    return input

}

console.log(sort(["makan","duduk","tidur","terbang"])) //duduk makan terbang tidur
console.log(sort(["anggi","angga","ani","adi"])) // angga anggi adi ani