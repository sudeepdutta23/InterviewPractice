// Find frequency of elements in an array
function findFrequency(arr){
    return arr.reduce((acc,curr)=>{
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    },{})
}

function findFrequency2(arr){
const frequency = {};
arr.forEach(el=>{
    frequency[el] = frequency[el] ? frequency[el] + 1 : 1;
});
// for(let elem of arr){
// frequency[elem] = frequency[elem] ? frequency[elem] + 1 : 1;
// }
return frequency;
}

console.log(findFrequency2([1, 2, 2, 3, 4, 4, 5]));
