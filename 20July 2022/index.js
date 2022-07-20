//1. Capitalize the first letter of each word.

let str = 'this is a string';
let arr = str.split(' ');
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
let str2 = arr.join(' ');
console.log(str2);