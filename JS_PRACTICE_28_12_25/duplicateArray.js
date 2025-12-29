// 1. Remove duplicates from array
function removeDuplicates(arr) {
    // return [...new Set(arr)];
    return arr.filter((v,i)=>arr.indexOf(v) === i)
}



console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

