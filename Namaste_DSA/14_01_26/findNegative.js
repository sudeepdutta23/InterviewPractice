// WAF that returns negative number from an array
let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function getNegativeNumbers(array){
    let negativeNumbers = array.reduce((acc, curr)=>{
        if(curr < 0){
            acc++;
        }
        return acc;
    },0)
    return negativeNumbers;
}

console.log(getNegativeNumbers(arr));