// const findMax = (arr)=>{

//     arr.sort((a,b)=>b-a);

// return arr[0];
// }

const findMax = (arr)=>{
    return Math.max(...arr)
}

console.log(findMax([1,5,3,9,2]));
console.log(findMax([-10,-5,-3,-9]));
console.log(findMax([5]));