 // we need to check if the object is empty or not 
 const isEmptyObject = (obj) =>{

    // return obj.length ===0 ?`it's is empty ` : `it's not empty`
    // objects in JavaScript do not have a length property like arrays or strings. 
    // Only arrays, strings, or similar objects (like NodeList) have a length property.


for(let key in obj){

    if(obj.hasOwnProperty(key)){
        return `it's not empty`
    }
}

return `it's empty`


}

console.log(isEmptyObject({name:"vinod"})); // it's not empty

console.log(isEmptyObject({}));     // it's empty
console.log(isEmptyObject({keyWithNull:null})); // it's empty
console.log(isEmptyObject({keyWithUndefined:undefined}))  // it's empty

