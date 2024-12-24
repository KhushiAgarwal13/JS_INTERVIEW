const num1 = [1,2,3,4]
const num2 = [5,6,7,8,9]

// const joinedArray = num1.concat(num2)
const myName = 'khushi'
const joinedArray =[...num1, ...num2,...myName]


const obj1 = {a:"apple", b:"banana"};
const obj2 = {c:"orange"};

const arr1= [1,2,3];
const arr2 = [4,5,6];


const spread1= {...obj1,...obj2}
const spread2= [...arr1,...arr2]


const set1 = new Set([1,2,3,5,5])
console.log(set1);



console.log(joinedArray)
console.log(arr2)

console.log(spread1);
console.log(spread2)                                                                              


// now there's an 