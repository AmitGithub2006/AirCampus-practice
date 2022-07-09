//Given an array, copy the 3rd element to the 2nd element of the array if the size of array is less than 5 else copy all the elements from 3rd element to 2nd element of the array.

let arr = [2, 5, 10, 7, 5, 19, 10]
if(arr.length < 5){
    arr[1] = arr[2]
  }
else{
  arr.splice(1,1)
  arr.push(arr[1])
}
console.log(arr);