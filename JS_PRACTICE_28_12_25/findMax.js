function findMax(arr){
    return arr.reduce((acc,curr)=> acc > curr ? acc : curr,0)
}

console.log(findMax([91,2,3,4,5,6,7,8,9,10,13]));
