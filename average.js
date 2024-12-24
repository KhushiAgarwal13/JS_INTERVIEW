const calculateAverage = (arr)=>{
let count = 0 ;

   const total =  arr.reduce((accum, num)=>{

return accum = accum +num

    },0)


console.log(total)

return total/arr.length;

}


console.log(calculateAverage([5,10,2,6]))