const obj = {

    name: "khushi Agarwal",
    age: 30,
    city:"Pune"
}

// convert the object to an array of key-value pairs

// const arr= [...Array.from(obj)]
// this method will not work , as plain obj is not iterable
const entries = Object.entries(obj);

console.log(entries)
console.log(entries.flat())


// convert the array  of key-value pairs back to an object

let newObj = Object.fromEntries(entries);
console.log(newObj)