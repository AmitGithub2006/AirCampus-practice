//1.Print all the digits of a number.
// let digit;
// n = 1234;
// while (n != 0) {
//   digit = n % 10;
//   console.log(digit);
//   n = Math.floor(n/10);
// }

//2.Count number of digits of a number.
let digit,
  count = 0;
n = 1234;
while (n != 0) {
  digit = n % 10;
  n = Math.floor(n / 10);
  count += 1;
}
console.log(count);