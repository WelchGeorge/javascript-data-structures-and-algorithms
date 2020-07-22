//sorts an array of base 10 integers using radix sort. time O(Nk), space O(N + k).

//helper getDigit: returns the digit in num at the given place value.
const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//helper digitCount: returns the number of digits in num.
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//helper mostDigits: given an array of numbers, returns the number of digits of the largest number in the list.
const mostDigits = (arr) => {
    let largest = 0;
    arr.forEach(element => {
        largest = Math.max(largest, digitCount(element));
    });
    return largest;
}

function radixSort(nums) {
    let largestDigits = mostDigits(nums);
    for (let k = 0; k <= largestDigits; k++) {
        let buckets = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        };
        nums.forEach(num => {
            buckets[getDigit(num, k)].push(num);
        });
        output = [];
        for (key in buckets) {
            output = output.concat(buckets[key]);
        }
    }
    return output;
}

console.log(radixSort([1,4,8,23,456,72367,46345,346,346247,368,365,3245,57,368,37,456,3673658,36583,654,6,5686538]));