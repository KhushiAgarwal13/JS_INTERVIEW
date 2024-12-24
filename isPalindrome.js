// we need to chekc now if a given string is palindrome or not

const isPalindrome=(word)>{

    word = word.toLowerCase().replace(/\W/g,"")

 let r_str = word.split("").reverse().join("")

 
    console.log(r_str)
    
    return word === r_str ? true: false;  


}


console.log(isPalindrome("A man, a plan, a canal, panama"))

console.log(isPalindrome("racecar"));  // outpt : true;
console.log(isPalindrome("hellow"));   // output : false;

// ignore case insensitive 'racecar' is same as 'Racecar'
// ignore spaces , punctuation , and capitalization

// .replace(/\W/g,""): this method is used to remove all 
// non-word characters from the string 

 