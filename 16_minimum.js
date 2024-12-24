const findMin = (arr)=>{

//     arr.sort((a,b)=>a-b);

// return arr[0];

if(arr.length===0)return "array is empty";
return Math.min(...arr)
}
 

console.log(findMin([5,10,2,8]));
console.log(findMin([5,-3,0,12,-7]))
console.log(findMin([ ]))