var age=Number(prompt("Enter Age"))


function adultOrMinor(age){
    if(age>=18) return "Adult"
    return "Minor"
}


var result=adultOrMinor(age)
console.log(result)