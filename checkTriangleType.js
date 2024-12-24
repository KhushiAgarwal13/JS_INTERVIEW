// if all the three sides of triagle ,it is equilateral
// if two sides of triangle are equal , it is isoceles
// if no side is equal , then it is scalene


const checkTriangleType = (a,b,c)=>{

    if(a===b && b===c)return "equilateral";

    if(a===b || b===c || a===c)return "isosceles";

    if(a!=b && b!=c)return "scalene"


}



console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(5,8,6));