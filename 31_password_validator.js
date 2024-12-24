// now we need to write the code of Password Validator

// conditions are
// there must be atleast one uppercase letter, one lowerCase letter, one number 
// the length must be atleast 8


const simplePasswordValidator = (password)=>{

    let hasUpperCase= false;
    let hasLowerCase= false;
    let hasNumber= false;


    for (let char of password){
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
            hasUpperCase= true;
        }
        else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            hasLowerCase= true;
        }
        else if(!isNaN(Number(char))){
            hasNumber=true;
        }


    }
    if(!hasUpperCase || !hasLowerCase || !hasNumber|| !password.length>=8){
        return false;
    }
    return true;
}


console.log(simplePasswordValidator("afkdsfadsf"))// false
console.log(simplePasswordValidator("Afkdsfadsf1")) // false
console.log(simplePasswordValidator("afkdsfadsf1A"))// true
// the input string password will contain only alphanumeric character
// and punctuation marks