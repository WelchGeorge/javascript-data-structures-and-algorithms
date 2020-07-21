//given an array, retruns the array sorted by insertion sort. Time complexity O(N^2).

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4, 0, -5, 26]));