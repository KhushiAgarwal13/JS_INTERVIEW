const isPowerofTwo = (num)=>{

    for(let i=0;i<num;i++){

        if(2**i> num)return false;
        if(2**i==num){
            return true;
        }
    }

    return false;
}

console.log(isPowerofTwo(16));
console.log(isPowerofTwo(256));