// 1.Print all the numbers in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     console.log(num1);
//     return num(num1 + 1, num2);
//   }
// }
// num(41, 50);

//2.Print all the numbers in descending order in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     console.log(num2);
//     return num(num1, num2 - 1);
//   }
// }
// num(41, 50);

//3.Print all the even numbers in the given range.
// function num(num1, num2) {
//   if (num1 <= num2) {
//     if (num1 % 2 == 0) {
//       console.log(num1);
//     }
//     return num(num1 + 1, num2);
//   }
// }
// num(41, 50);

//4.Find the factorial of a given number n.
function factorial(n,fact) {
    if(n>0){
        fact*=n;
        return factorial(n-1,fact);
    }
    return fact;
}
console.log(factorial(6,1));

// 5.Find the nth digit of the fibonacci series.
function fibo(a,b,counter){
    if(counter<=12){
        let c = a+b;
        return fibo(b,c,counter+1);
    }
    console.log(a);
}
fibo(0,1,1);