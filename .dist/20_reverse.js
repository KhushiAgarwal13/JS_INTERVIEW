const reverseString= (str)=>{

    let r_str="";

    for(i=str.length-1;i>=0;i--){

        r_str+=str[i];

    }
    return r_str;

//  return  str.split('').reverse().join('')



}

console.log(reverseString("helloo"))