// write a function to check if a character is uppercaseor lowerCase
const isUpperCase= (char)=>{

if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
    return true;
}


return false;

// return char===char.toUpperCase()
}
const isLowerCase = (char)=>{



}

console.log(isUpperCase('s')); // true
console.log(isLowerCase('b')); // true

