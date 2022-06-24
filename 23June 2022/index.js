//--------------------------------------------------Ques using Recursion----------------------------------------------------

//Q1.Print a number only once
function x(num){
    console.log (num)
}
x(6)

//Q2.Print same number infinite times.
function x(num) {
    console.log(num)
    return x(num)
}
x(6)

//Q3.Print a number in descending order
function x(num) {
    console.log(num)
    return x(num -  1)
}
x(6)

//Q4.Print a number in descending order till 0.
function x(num) {
    console.log(num)
    if (num > 0){
        return x(num - 1)
    }
}
x(6)


//Q5.Print a number with its factorial with if statement only.
// function x(num,fact) {
//     if(num>0){
//         fact *= num;
//     return x(num-1, fact);
//     }
// }
// x(6,1);

//Q6.Print a number with its factorial with if and else statements.
// function x(num,fact) {
//     if(num>0){
//         fact *= num;
//         return x(num-1, fact);
//     }
//     else{
//      console.log(fact);
//     }
// }
// x(6,1);

//Q7.Print Fibonacci series.
var fib = function x(num){
if(num === 1){
    return 0;
}
if(num === 2){
    return 1;
}
return fib(num-1)+fib(num-2);
} 
console.log(fib(5));
console.log(fib(8));
console.log(fib(12));