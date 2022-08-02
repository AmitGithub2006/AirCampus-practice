//1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Soln:-
// let arr = [1,7,3,2,7,6];
// let target = 9;

// for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] + arr[j] === target){
//             console.log([i,j]);
//         }
//     }
// }