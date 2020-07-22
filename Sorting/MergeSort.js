//sorts an array using merge sort algorithm. time complexity O(N log N), space complexity O(N).

//helper function merge: given two sorted arrays, return a new array which is also sorted and contains the elements from both arrays.
//O(N + M) time and space complexity.
const merge = (arr1, arr2) => {
    //output array
    newArr = [];
    //pointers i and j to first element in each array.
    let i = 0;
    let j = 0;
    //while there are values not looked at
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else if (arr1[i] >= arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
       newArr.push(arr1[i]); 
       i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]); 
        j++;
     }
    return newArr;
};

//merge sort function breaks array into halves until all subarrays are 0 or 1 element.
//recursively call merge to rejoin these arrays then return the complete sorted array.
function mergeSort(arr) {
    //split array into 2 halves.
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    //merge arrays.
    return merge(left, right);
}

console.log(mergeSort([10, 20, 30, 4, 5, 60]));