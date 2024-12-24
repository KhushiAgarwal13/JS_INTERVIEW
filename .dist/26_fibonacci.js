// find the fibonacci series using recurion

// 0 1 1 2 3 5 8 ....


const fibonacci =(n)=>{
    if(n<=1)return n;

    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(0));  // output :0 
console.log(fibonacci(1));  // output: 1
console.log(fibonacci(2));  // output: 1
console.log(fibonacci(3));  // output: 2
console.log(fibonacci(4));  // output: 3
console.log(fibonacci(5));  // output: 5

// f[n]=f[n-1]+f[n-2]  , where f[1]=f[2]= 1

