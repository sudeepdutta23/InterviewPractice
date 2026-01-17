// WAF to find largest number in an array

let arr = [5, 0, 7, 10, 8, 17, 1];

function findLargestNumber(array){
    let largestNumber = array.reduce((acc, curr) => {
        if(curr > acc){
            acc = curr;
        }
        return acc;
    },0)
    return largestNumber;
}

console.log(findLargestNumber(arr));