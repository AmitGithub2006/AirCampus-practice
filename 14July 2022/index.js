//1.You are given two arrays, arr and moves. moves is a 2D array containing two values. The first value is present in arr and 2nd value is not present in arr. Replace the value of first element in arr with 2nd value from moves. Return the changed array.

// let arr = [1,5,7,8]
// let moves = [
//     [1,3],
//     [7,9]
// ]
// for(let i = 0; i < moves.length; i++){
//     if(arr.includes(moves[i][0])){
//         let newArr = arr.indexOf(moves[i][0]);
//         arr[newArr] = moves[i][1];
//     }
// }
// console.log(arr)

//2.You are given a 2D array and arr[i] denotes a triangle and will contain 2 values, perpendicular and base. Calculate the hypotenuse for each triangle and return the triangle with the maximum hypotenuse value.If the triangle is not valid, return -1.

let triangles =[
    [1,2],
    [2,3],
    [3,4]
]
    let hypo = []
    for(let i = 0; i < triangles.length; i++){
    let side1 = triangles[i][0];
    let side2 = triangles[i][1];
    if(side1 !== 0 && side2 !== 0)
        hypo.push(Math.sqrt(side1**2 + side2**2));
    else return -1;
}
let max = hypo[0];
for(let i = 1; i < hypo.length; i++){
if(max < hypo[i]){
    max = hypo[i];
}
}
console.log(triangles[hypo.indexOf(max)]);