const removeDuplicates  = (arr)=>{

    

        num = [...new Set(arr)];
        return num;
    

}

console.log(removeDuplicates([1,2,2,3,4,5]))