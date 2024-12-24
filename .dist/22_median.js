// so we need to find the median
// meadian means the middle element in the sorted array
// if the length is odd , the median will be the middle element

const findMedian =  (arr)=>{
    // step1 sort the array
    // step2 check if array length is odd or even
    // step3 for even length array 
    // step4 for odd length aray

    arr.sort((a,b)=>a-b);

    let length = arr.length;

    let mid = Math.floor(length/2);

    if(length%2  === 0){
        return  (arr[mid] +arr[mid-1])/2 
    }
    return arr[mid]
    






}

console.log(findMedian([5,3,9,1,7]))
console.log(findMedian([2,4,6,8]))
console.log(findMedian([5,3,9,1,7]))