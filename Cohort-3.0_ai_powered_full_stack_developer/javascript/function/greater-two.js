var a=Number(prompt("Enter first number"))
var b=Number(prompt("Enter second number"))


function greateNumber(a,b){
   
    if(a>b) return a
    return b
}


var result=greateNumber(a,b)
console.log(result)