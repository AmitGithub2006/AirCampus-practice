// 1. Return the middle character if string length is odd else return middle two characters.

// let str = 'amit'
// let n = str.length;
// let newStr;
// for(let i = 0; i < n; i++){
//   if(n % 2 !== 0){
//     newStr = str[Math.floor(n/2)];
//   }
//   else{
//     newStr = str[Math.floor(n/2)-1]+str[Math.floor(n/2)]
//   }
// }
// console.log(newStr);

//2. Capitalize the first letter of each word.

let str = 'kuch to log kahenge';
str = str.split(' ');
for(let i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str);