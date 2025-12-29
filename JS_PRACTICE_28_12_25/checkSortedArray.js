function isArraySorted(arr){
return arr.every((el,i)=>{
 return i == 0 || arr[i-1] >= el 
})
}

console.log(isArraySorted([91,11,5,3,1]));
