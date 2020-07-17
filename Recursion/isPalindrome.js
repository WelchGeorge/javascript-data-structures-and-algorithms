//given a string returns true if string is a palindorme. else returns false.
function isPalindrome(string) {
    if (string.length === 1) return true;
    if (string.length === 2) return string[0] === string[1];
    if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1));
    return false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("aaa"));
console.log(isPalindrome("ab"));