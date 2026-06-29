var temp=Number(prompt("Enter the Temperature in Celsius"))


function CelsiusToFahrenheit(temp){
   fr=( ( 9 / 5 ) * temp) + 32
    return fr
}


var result=CelsiusToFahrenheit(temp)
console.log(result)