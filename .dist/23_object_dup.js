const numbers =[1,2,2,3,1,4,2];

let counts= {};
let maxi  = 0;
let mod;
for(let element of numbers){

    counts[element]= (counts[element] || 0)+1;
    if(counts[element] > maxi){

        maxi = counts[element];
        mod = element;
    }

}

console.log(counts)
console.log(mod)
