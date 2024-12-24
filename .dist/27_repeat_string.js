// WRite a function called repeatString that takes two parameters:


// str: A string that needs to be repeated
// num: An integer representing the number of time the string should be repeated
// The function should be repeat the input string the specified no. of times and return the result 


const repeatString = (str,num)=>{


    // return num>   0?str.repeat(num):str
    let result ="";
for(let i=0;i<num;i++){

    result+=str;

}
return result;

}
 
console.log(repeatString("abc",5)); // output :"abcabcabcabcabc"

