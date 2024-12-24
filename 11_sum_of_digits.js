//  const sumOfDigits = (num)=>{

//     let sum =  0;


//     while(num>0){

//     let temp= num%10;
//     num=Math.floor(num/10)
//     sum=sum+temp;
//     }

// return sum;
// }


const sumOfDigits = (num)=>{

    //  let arr = num.toString().split("");
    let arr= Array.from(String(num) , Number)

  return arr.reduce((accum,num)=>{
        return  accum+num;
    },0)
    // console.log(arr);


}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));

