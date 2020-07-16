//given an int n, returns the nth number in the Fibonacci sequence
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 2) + fib(n - 1);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));