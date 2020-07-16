//given a positive integer, returns the integer sum from 0 to that number
function recursiveRange(num) {
    if (num === 0) return 0;
    return num += recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));