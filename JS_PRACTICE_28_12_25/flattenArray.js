function flat(arr){
    return arr.reduce((acc,curr)=>acc.concat(Array.isArray(curr) ? flat(curr) : curr),[1,2])
}

function flattenArray(arr){
 //return arr.flat(Infinity);
 return flat(arr);
}

console.log(flattenArray([1, 2, [3, [4, 5,[6]], 7], 8]));
