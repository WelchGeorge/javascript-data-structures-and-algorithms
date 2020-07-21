//given an array returns the array sorted with selection sort. time complexity: O(N^2).
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function selectionSort(arr) {
    for (j = 0; j < arr.length; j++) { 
        let shortestIndex = j;
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i] < arr[shortestIndex]) shortestIndex = i;
        }
        if (j !== shortestIndex) swap(arr, j, shortestIndex);
    }
    return arr;
}

console.log(selectionSort([5,6,3,-3,-7,0,27,86,10,6]));