var name=prompt("Enter your name")

var copy=[...name]

function palindromeCheck(copy){

    var i=0, j=copy.length-1

    while(i<j){
      var temp=copy[i]
        copy[i]=copy[j]
        copy[j]=temp
        i++
        j--
    }

    copy = copy.join("")

     return compare(copy, name);


}

function compare(copy, name)
{
    if(copy==name) return "Palindrome"
    return "Not Palindrome"
}


var result=palindromeCheck(copy)
console.log(result)


