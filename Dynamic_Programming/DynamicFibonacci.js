//basic recursive fibonacci O(2^N) time complexity, O(N) space complexity.
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//memoized solution O(N) time complexity, O(N) space complexity. call stack overflow for large n due to recursion.
function memoFib(n, memo = [undefined, 1, 1]) {
    if (memo[n] !== undefined) return memo[n];
    let result =  memoFib(n - 1, memo) + memoFib (n - 2, memo);
    memo[n] = result;
    return result;
}

//tabulation O(N) time complexity, O(1) space complexity. 
function tabFib(n) {
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fib(35));
console.log(memoFib(1000));
console.log(tabFib(10000));

