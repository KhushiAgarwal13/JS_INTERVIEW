const countVowels = (str)=>{

    const vowels= ['a','e','i','o','u']

    let count = 0;
    for(char of str){

        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }

    return count;


}


console.log(countVowels("Hello world"));  // output : 3
console.log(countVowels("ThE quIck brOwn fOx")); // output : 5
console.log(countVowels("Brrp")); // output : 0


