const snake_case  = (str)=> {

 str = str.trim().split(' ').map((num)=>num.toLowerCase());

 str=str.join('_')

 return str;
    
}

console.log(snake_case("Hello WoLld"))