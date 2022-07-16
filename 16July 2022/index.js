//1. Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array

// let str = 'air campus'
// str = str.replace(/ /g,'').split('');
// console.log(str);

//2. Given a string, count the number of vowels present in the string and return it.

let str = 'aircampus';
let count = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++;
    }
}
console.log(count);