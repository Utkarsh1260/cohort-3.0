var a=prompt("Enter a string").toLowerCase()


function countVowels(a, count){
    for(var i = 0; i < a.length; i++){
        if( a[i]=='a' || 
            a[i]=='e' || 
            a[i]=='i' || 
            a[i]=='o' || 
            a[i]=='u' )  count++

    }

    return count
}

var count=0
console.log(countVowels(a,count))