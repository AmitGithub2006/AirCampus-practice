//Ques3.Using a loop,print all numbers from a to b in their reverse order

//By for loop
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// for(let i = b; i >= a; i--){
//     console.log(i);
// }

//By while loop
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let i = b;
// while(i>=a){
//     console.log(i);
//     i--;
// }

//By do while loop
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// let i = b;
// do{
//     console.log(i);
//     i--;
// } while (i >= a);

//Ques4.Using a loop, find the factorial of a number.

//By for loop
// let n = parseInt(process.argv[2]);
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact = fact * i;
// }
// console.log(fact);

//By while loop
// let n = parseInt(process.argv[2]);
// let fact = 1;
// let i = 1;
// while (i <= n) {
//   fact *= i;
//   i++;
// }
// console.log(fact);

//By do while loop
// let n = parseInt(process.argv[2]);
// let fact = 1;
// let i = 1;
// do {
//   fact *= i;
//   i++;
// } while (i <= n);
// console.log(fact);

//Ques5.Using a loop, print all the digits of a number.

// let n = parseInt(process.argv[2]);
// let digit = 0;
// while (n > 0){
//     digit = n % 10;
//     console.log(digit);
//     n = Math.floor(n/10);
// }

//Ques6.Using a loop, print the fibonacci series.

//By for loop
// let a = 1;
// let b = 1;
// let n = parseInt(process.argv[2]);
// for(let i = 0; i <= n; i++){
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

//By while loop
// let a = 1;
// let b = 1;
// let i = 0;
// let n = parseInt(process.argv[2]);
// while (i <= n) {
//     console.log(a);
//   c = a + b;
//   a = b;
//   b = c;
//   i++;
// }
