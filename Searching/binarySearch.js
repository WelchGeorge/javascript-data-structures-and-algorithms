//given a sorted array and a value, returns the index of the value. if none found, return -1.
function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        if (arr[middle] < value) {
            left = middle + 1;
        } else if (arr[middle] > value) {
            right = middle - 1;
        } else if (arr[middle] === value) {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5], 5)); //4