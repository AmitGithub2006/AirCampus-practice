// 1.You're given the income after tax, you need to return the money that is to be spent on needs, wants and savings.
// You are supposed to follow 50 30 20 rule. That is 50% needs, 30% wants and 20% savings.

// Soln:-
// let salary = 10000;
// let needs = 0.50*salary;
//   let wants = 0.30*salary;
//   let savings = 0.20*salary;
//   let obj = {
//     'Needs' : needs,
//     'Wants' : wants,
//     'Savings' : savings,
//   }
//   console.log(obj);

// 2.Given an object containing the width length and height of a box. Return the volume of the box.

// Soln:-
let obj = { length: 7, width: 2, height: 1 }
console.log(Object.values(obj).reduce((a,b) => a*b));
