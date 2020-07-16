//accepts a sorted array and returns number of unique values in array.
function countUniqueValues(input){
    let array = input;
    if (array.length === 0) return 0;
    //initialize a pair of pointers that start at the first two indices of the array.
    let left = 0;
    let right = 1;
    // iterate right pointer over array and use left pointer as comparison to store unique values.
    while (right < array.length) {
        if (array[left] == array[right]) {
            right ++;
        } else {
            left++;
            array[left] = array[right];
            
        }
    }
    //unique values is left pointer + 1;
    return left + 1;
}
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));