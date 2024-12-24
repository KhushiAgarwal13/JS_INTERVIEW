const checkPalindrome = (word)=> {

    word  = word.toLowerCase().replace(/\W/g,'')
    rev = word.split("").reverse().join("")

    
    
    // console.log(rev)
    return word === rev?"true":"false"

}


console.log(checkPalindrome("A man, a plan, a canal, panama"))
console.log(checkPalindrome("a home without mom is not home"))
console.log(checkPalindrome('mom'))

