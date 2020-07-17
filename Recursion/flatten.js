//given an array of arrays, returns a new array with all the values flattened.
//e.g. [1,2,3,[4,5]] => [1,2,3,4,5].
function flatten(arr) {
    let newArr = [];
    arr.forEach(item => {
        if (!Array.isArray(item)) {
            newArr.push(item)

        } else {
            newArr.push(...flatten(item));
        }
    });
    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3