// WAF to find second largest number in an array
let arr = [5, 0, 7, 10, 8, 17, 1];
function secondLargest(arr){
    // let sort = arr.sort((a,b)=>b-a);
    // return sort[1];
    let largest = -Infinity, secondLargest = -Infinity;
    for(let elem of arr){
        if(elem > largest){
            secondLargest = largest;
            largest = elem;
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr));

