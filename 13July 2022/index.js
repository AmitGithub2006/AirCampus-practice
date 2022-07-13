//1.A manager wants to increment each of its employees' salaries by Rs.1000. You are given an array with the current salary of each employee. Return the array containing the incremented salary. Use array callback methods.

// function goodManager(arr){
//     let newArr=arr.map(function(num){
//        return num+1000;
//     })
//     return newArr;
// }
// console.log(goodManager([1000,2000,3000]));

//2.Mickey Mouse gave a task to Goofy. The task is that Mickey will give Goofy an array of numbers and Goofy will find the square of all the numbers.. Help Goofy to find the square of given numbers. Use callback methods.

function square(arr){
    let newArr = arr.map(function(num){
      return num**2;
    })
    return newArr
  }
  console.log(square([2,3,6]))