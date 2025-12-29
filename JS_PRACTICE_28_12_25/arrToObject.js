function convertArray(arr){
return arr.reduce((acc,cur)=>{
    acc[cur.id] = cur;
    return acc;
},{})
}

const array = [
{id: 1, name: "Sudeep"},
{id: 2, name: "Ankur"},
{id: 3, name: "Arnab"}
]

console.log(convertArray(array));
