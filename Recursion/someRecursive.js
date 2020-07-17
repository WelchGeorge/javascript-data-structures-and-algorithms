//given an array and a callback, return true if any value in the array returns true when passed to the callback. else returns false.
function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([6,2,4,8], isOdd)); //false

console.log(someRecursive([1,2,3,4], isOdd)); //true