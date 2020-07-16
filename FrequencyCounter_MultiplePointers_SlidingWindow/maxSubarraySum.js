//given an array of ints and a number, find the maximum sum of a subarray with the length of the number passed in.
function maxSubarraySum(arr, num) {
    //edge case: if num is greater than length of array return null;
    if (num > arr.length) return null;
    //create am initial sum value for the first possible position of a subarray of length num in the array.
    let windowTotal = 0;
    for (let i = 0; i < num; i++) {
        windowTotal += arr[i];
    }
    let largestSum = windowTotal;
    //create a pointer to the end of the subarray
    let pointer = num;
    //move pointer through the array and add pointed value to window total while subtracting the value at pointer - num;
    while (pointer < arr.length) {
        windowTotal += arr[pointer];
        windowTotal -= arr[pointer - num];
        pointer++;
        //if windowTotal is larger than largestSum, set largestSum to windowTotal.
        if(windowTotal > largestSum) {
            largestSum = windowTotal;
        }
    }
    //return largest sum
    return largestSum;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));