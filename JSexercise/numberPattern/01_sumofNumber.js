//Find the sum of digits of the number 98765.

const { log } = require("console");

const sumOfNumbers = () =>{
    let IP = 98765;
    let sum = IP.toString().split('');
    let totalSum = 0;
    for(let i=0; i<sum.length; i++){
        totalSum += parseInt(sum[i]);
    }
    return totalSum

}
console.log(sumOfNumbers());

let IP = 12345;
let sum = IP.toString().split('').map((number=> number)).reduce((acc, curr) => acc + parseInt(curr), 0);
console.log(sum);



