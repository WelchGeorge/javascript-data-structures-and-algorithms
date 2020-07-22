//given an array sorts using quick sort. average time complexity O(N log N), worst O(N^2). space O(log N).
//worst case if pivot is minimum or maximum in array so could use random pivot.

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

//helper function pivot: given an array, designates a pivot element
//and moves all numbers less than pivot to the left of pivot
//and all numbers larger to the right.
//when complete returns the index of the pivot.
const pivot = (arr, start = 0, end = arr.length - 1) => {
    //grab pivot from start of array.
    let pivot = arr[start];
    //store current pivot index.
    let pivotIndex = start;
    //loop through array between start to end.
    for (let i = start + 1; i <= end; i++) {
        //if the pivot is greater than the current element, increment the pivot index and 
        //swap the current element with the element at the pivot index.
        if (pivot > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    //swap the pivot element with the element at the pivot index.
    swap(arr, start, pivotIndex);
    //return the pivot index.
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([1,3,2,5,4,6,7,8,5,-10,50]));