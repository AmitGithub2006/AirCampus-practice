//Ques.Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Soln:-
let s = "abcbba";
let length = s.length;
if (length <= 1) {
  return length;
}
let p = 0;
let q = 1;
let result = 1;
while (q < length) {
      let sub = s.slice(p,q);
      let i = sub.indexOf(s[q]);
      if(i !== -1){
          p = p + i + 1;
}
    q++;
    result = q -p > result ? q - p : result;
}
console.log(result)