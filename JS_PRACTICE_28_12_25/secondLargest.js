function secondLargest(arr){
let removeDuplicate = [...new Set(arr)];
return removeDuplicate.sort((a,b)=>b-a)[1];
}

console.log(secondLargest([91,2,3,4,5,6,7,8,9,10,13]));
