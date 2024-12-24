 const countChar = (word  , char )=>{

    word = word.toLowerCase();
    char = char.toLowerCase();

  const totalcount =   word.split("").reduce((count, currchar)=>{
         
if(currchar==char){
    count++;
}

return count ;
    },0)

        return totalcount;
} 



 console.log(countChar("MissIssippi", "I"));  // output: 4