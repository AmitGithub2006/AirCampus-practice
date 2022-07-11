//1. Print repeating elements in an array.

// let arr = [1,2,3,13,4,1,7,2];
// for(let i = 0; i < arr.length; i++){
//     if(arr.includes(arr[i],i+1)){
//     console.log(arr[i]);
// }
// }

//2. Print non-repeating elements in an array.

let arr = [1,2,3,13,4,1,7,2];
for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
        console.log(arr[i]);
    }
}