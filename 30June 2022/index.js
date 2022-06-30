//1. Print the pattern given below, using loops.
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let num = 4, count = 1;
// for(let i = 0; i <= num; i++){
//     stars = '';
//     for(let j = 0; j <= i; j++){
//         stars += count;
//         count += 1;
//     }
//     console.log(stars);
// }

//2. Print the pattern given below, using loops.

// 1
// 01
// 101
// 0101
// 10101
// 010101

let num = 5;
for(let i = 0; i <= num; i++){
    stars = '';
    for(let j = 0; j <= i; j++){
        if((i+j) % 2 === 0){
            stars += 1;
        }
        else{
            stars += 0;
        }
    }
    console.log(stars);
}