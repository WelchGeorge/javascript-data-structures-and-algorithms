/*given both an array of positive ints and a positive int,
return the minimal length of a contiguous subarray of which the sum is greater or equal to the integer passed.
if none found, return 0.*/
function minSubArrayLen(arr, num) {
    //create total to hold sum of subarray
    let windowTotal = 0;
    //create total to hold shortest subarray;
    let shortestSub = Infinity;
    //create a pointer to point to the start and end of the subarray and iterate start pointer through array.
    let j = 0;
    let i = 0;
    while (i < arr.length) {
        
        // if window is less than target
        if(windowTotal < num && j < arr.length) {
            //add the value at j to the total and iterate j.
            windowTotal += arr[j];
            j++;
        } else if (windowTotal >= num) {
            //an array exists, shortest is set to subarray length if shorter.
            shortestSub = Math.min(shortestSub, j - i);
            // subtract arr[i] from total and iterate i.
            windowTotal -= arr[i];
            i++;
        } else {
            //end reached but value not met.
            break;
        }
    }

    //if shortestSub equals infinity no match so return 0, else return shortestSub.
    return shortestSub === Infinity ? 0 : shortestSub;

}
console.log(minSubArrayLen([2,3,1,2,4,3], 7));