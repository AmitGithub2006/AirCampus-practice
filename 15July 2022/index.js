//Ques. Return an array where each occurence of 2 is duplicated and the other elements are shifted to the right without manipulating the array size.

let arr = [1,2,5,2,7,9,1,3]
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 2) {
      arr.splice(i+1,0,2);
      arr.pop()
      i++;
    }
}
console.log(arr);