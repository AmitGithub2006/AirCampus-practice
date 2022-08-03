//Ques:- You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//Soln:-
let l1 = [2,4,3];
let l2 = [5,6,4];

let num1 = parseInt(l1.reverse().join().replace(/,/g,''));
let num2 = parseInt(l2.reverse().join().replace(/,/g,''));

let sum = (num1 + num2).toString();
sum = sum.split('').reverse()
console.log(sum);