 //   .reduce() method

//  The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.                                

// const findMax = (a,b) => Math.max(a,b);
// console.log([1,5].reduce(findMax)); //5
// console.log([1,5].reduce(findMax,2)); //5
// console.log([1,5].reduce(findMax,8)); //8
// console.log([50,50].reduce(findMax,60)); //60
// console.log([50].reduce(findMax,10)); //50
// console.log([].reduce(findMax,10)); //10
// console.log([].reduce(findMax)); //TypeError: Reduce of empty array with no initial value

// Ques1: Sum of elements using reduce(without initial value).

//Soln:-
// const arr = [1,2,3,4,5]
// let sumArr = arr.reduce(function (prev, curr){
//     console.log('prev',prev,prev+ curr)
//     return prev+curr;
// })
// console.log(sumArr)

// Ques2: Sum of elements using reduce(with initial value).

//Soln:-
// const arr = [1,2,3,4,5];
// let sumArr = arr.reduce(function (prev,curr){
//     console.log('prev',prev,prev + curr);
//     return prev + curr;
// },5)
// console.log(sumArr);