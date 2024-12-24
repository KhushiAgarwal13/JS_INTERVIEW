const startsWith = (str,sub)=>{

    return str.toLowerCase().startsWith(sub.toLowerCase())

    



    if(str.slice(0,sub.length).join('').toLowerCase()=== sub.toLowerCase()) {
        return true;
    }

    return false;

}

console.log(startsWith("Hello world" ,"hello"))
console.log(startsWith("Hello world", "World"))