// write a functin fizzbuzz that accepts two no. startNum, and endNum, as input.
// The function should return an array containing number and specific string based on followwing  rules


// for each number i in the fange from startNum to endNum (both inclusve)
// if i is divisble by both 3 and 5 ,include "FizzBuzz" in the result
// if i is divisible by only 3 , include "Fizz" in the result 
// if i is divisible by only 5, include "Buzz in the result"
// otherwise include the number i itself



const fizzbuzz=(a,b)=>{
    
    let arr=[];

    for(let i =a;i<=b;i++){

        if(i%3===0 && i%5===0){
        arr.push("Fizzbuzz")

        }
        else if(i%3===0){
            arr.push("Fizz");
        }
        else if(i%5===0){
            arr.push("Buzz");
        }
        else {
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzbuzz(1,15))
// output [1, 2 ,"Fizz", 4 , "Buzz", ...]