//1.Hollow triangle pattern.

// let n = 6;
// for(let i = 1; i <= n; i++){
//     str = ''
//     for(let j = 1; j <= i; j++){
//         if(i == n || j == 1 || i == j){
//             str += '*'
//         }
//         else{
//             str += ' '
//         }
//     }
//     console.log(str)
// }

//2.Hourglass star pattern

for(let i = 5; i >= 2; i--){
    str = '';
    for(let j = 1; j <= 5-i; j++){
        str += ' ';
    }
    for(let k = 1; k <= 2*i - 1; k++){
        str += '*'
    }
    console.log(str)
}
//Down pyramid
for(let i = 1; i <= 5 ; i++) {
    str = '';
    for(let j = 1; j <= 5-i; j++){
        str += ' ';
    }
    for(let k = 1; k <= 2* i - 1; k++){
        str += '*'
    }
    console.log(str);
}