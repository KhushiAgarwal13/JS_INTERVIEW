const sumOfSquare = (num) => {
    return num.reduce((accum, curr) => {
       accum += curr * curr; // Add the square of curr to accum
       return accum;         // Return the updated accum for the next iteration
    }, 0);
 };
 
 console.log(sumOfSquare([1, 2, 3])); // Output: 14
 