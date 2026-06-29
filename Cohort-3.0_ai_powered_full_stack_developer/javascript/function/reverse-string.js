var name=prompt("Enter your name")

var copy=name.split("")

function stringReverse(copy){

    var i=0, j=copy.length-1

    while(i<j){
      var temp=copy[i]
        copy[i]=copy[j]
        copy[j]=temp
        i++
        j--
    }

    return copy.join("");


}


var result=stringReverse(copy)
console.log(result)


