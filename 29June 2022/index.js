//P1.Print this pattern.
// 1
// 12
// 123
// 1234
// 12345

// let num = 5;
// for(let i = 1; i <= num; i++){
//   stars = '';
//   for(let j = 1; j <= i; j++){
//     stars+= j;
//   }
//   console.log(stars);
// }

//2. Print this pattern.
// 1
// 22
// 333
// 4444
// 55555

let num = 5;
for(let i = 1; i <= num; i++){
  stars = '';
  for(let j = 1; j <= i; j++){
    stars+= i;
  }
  console.log(stars);
}