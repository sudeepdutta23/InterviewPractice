function groupByProperty(array){
    return array.reduce((acc,curr)=>{
        acc[curr.role] = acc[curr.role] || [];
        acc[curr.role].push(curr);
        return acc
    },[]);
}

const users = [
{name:"Sudeep Dutta", role: "Admin"},
{name:"Rakesh Das", role: "Super_Admin"},
{name:"Pranab Baisya", role: "User"},
{name:"Padumoni Paul", role: "Admin"},
{name:"Priya Sen", role: "Admin"},
{name:"Paromita Roy", role: "User"},
]

console.log(groupByProperty(users));
