//Q1. To find the factorial of a number.(by normal function)
// function factorial(num){
//     let fact = 1;
//     for(let i = num; i>0; i--){
//         fact = fact*i;
//     }
//     return fact;
// }
// let ans= factorial(5);
// console.log(ans);

//Q2. Sum of square of digits.(by arrow function)

// let sumOfSquareOfDigits = (num) => {
//     let sum = 0
// while(num != 0){
//     let rem = num % 10;
//     sum = sum + rem**2;
//     num = Math.floor(num/10);
// }
//     return sum;
// }
// console.log(sumOfSquareOfDigits(45643));
// console.log(sumOfSquareOfDigits(987657));
// console.log(sumOfSquareOfDigits(8768));

//Q3. Sum of square of digits.(by IIFE function)

// console.log((function sumOfSquareOfDigits(num) {
//     let sum = 0
// while(num != 0){
//     let rem = num % 10;
//     sum = sum + rem**2;
//     num = Math.floor(num/10);
// }
//     return sum;
// })(23));

//Q4. Sum of square of digits.(by anonymous function)
// let ans = (function (num) {
//     let sum = 0
// while(num != 0){
//     let rem = num % 10;
//     sum = sum + rem**2;
//     num = Math.floor(num/10);
// }
//     return sum;
// })(68);
// console.log(ans)


//Q5. Sum of square of digits.(by anonymous arrow IIFE function)

let ans = ((num) => {
    let sum = 0
while(num != 0){
    let rem = num % 10;
    sum = sum + rem**2;
    num = Math.floor(num/10);
}
    return sum;
})(567);
console.log(ans)

