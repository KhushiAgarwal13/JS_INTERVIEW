// Write a function generateHash that generates a hash tag from
// a given input strnig' 

const generateHash = (str)=>{


    if(str.trim().length===0 || str  .length >280)return false

// removes leading ad trailing space
str=str.split(" ");
// str = str.map((currElem)=>currElem.replace(currElem[0],currElem[0].toUpperCase()))
str = str.map((currElem)=>currElem.charAt(0).toUpperCase()+currElem.slice(1))
console.log(str)

str= `#${str.join("")}`
return str;

}

console.log(generateHash("my name is thapa technical"));
// o/p = "#MyNameIsThapaTechnical

