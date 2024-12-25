// **literals** - ordinary characters like a, 1, %
// ** metacharacters**  characters with special meaning, like `.` (any character),
// ^(caret)(start of string) , $ (end of string ) etc
// character class [a-z] for any lowercase ByteLengthQueuingStrategy
// character class & shorthand - 

// \d - matches any digit (0-9)
// \D - matches any non-digit.$

// \s - matches any whitespace character(including spaces, tabs and line breaks)
// -\S - matches any non-whitespace character


// quantifiers: specify how many times a character can occur , like 

//REGUALAR EXPRESSINO FOR VALIDATING EMAIL


const validateEmail = (email)=>{
    return /^[A-Za-z0-9.%+_]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)
}


console.log(validateEmail("jjohn.doe@example.com")); // true
console.log(validateEmail("invalid..do@domail.com"))  // false
console.log(validateEmail("missing@dotcom"))// false;
console.log(validateEmail("no@domain"))  // false