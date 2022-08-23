Array.prototype.myFilter = function (callbackfn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackfn (this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
let filteredNums = [1,2,3,4].myFilter((num) => num > 2)
console.log(filteredNums);