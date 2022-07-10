// Q.Take an integer as input and print 'YES' if the number is a special number. Otherwise, print 'NO'.
// Hint:
// A special number is a number which is equal to the sum of the factorials of its digits. Example: For number = 145, the output should be 1! + 4! + 5! = 145 Hence 145 is a special number.

let n = 145,fact =1,sum=0,temp = n;
if(n === 0) console.log('NO');

while(n > 0){
let lastDigit = n % 10;
n =Math.floor(n / 10);
for(let i = lastDigit; i > 0; i--) {
    fact *= i; 
}
sum += fact;
fact = 1;
}
n = temp;

if(sum === n) console.log('YES');
else console.log('NO');