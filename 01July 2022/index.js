//1. Print the pattern given below, using loops.
// 1
// 23
// 123
// 1231
// 23123

// let count = 1;
// for(i= 1; i <= 5; i++){
//     stars = ''
//     for(j= 1; j <= i; j++){
//         if(count > 3){
//             count = 1;
//         }
//         stars += count
//         count+=1;
//     }
//     console.log(stars);
// }

//2. Print the pattern given below, using loops.
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for(i= 5; i >= 1; i--){
//     stars = ''
//     for(j=5; j >= i; j--){
//         stars += j;
//     }
//     console.log(stars);
// }

// 3.Print the pattern given below, using loops.
// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

// for(i= 5; i >= 1; i--){
//     stars = ''
//     for(j=i; j<=5; j++){
//         stars += j;
//     }
//     console.log(stars);
// }

// 4.Print the pattern given below, using loops.
//     1
//    12
//   123
//  1234
// 12345

// for(i = 1; i <=5; i++){
//     stars = ''
//     for(j=1; j<=5-i; j++){
//         stars += ' '
//     }
//     for(k = 1; k <= i; k++){
//         stars += k
//     }
//     console.log(stars);
// }