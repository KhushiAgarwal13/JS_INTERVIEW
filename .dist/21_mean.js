const calculateMean = (arr)=>{


    if(arr.length===0)return 0;


let sum =  arr.reduce((accum, num)=>{

    return accum+num;

},0)

return sum/arr.length; 



}

console.log(calculateMean([1,2,8,4,5]))

