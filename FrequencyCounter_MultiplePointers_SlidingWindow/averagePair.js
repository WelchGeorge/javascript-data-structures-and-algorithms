//given a sorted array of ints and a target average, determine if there is a pair of values where the average is equal to the target.
function averagePair(arr, target) {
    //create left and right pointers at each end of array
    let left = 0;
    let right = arr.length - 1;
    /*while the pointers do not overlap, find the average of the ints pointed at.
     if the average is below the target, increase the left pointer; if larger decrease the right pointer.
     if the average is the target, return true. if all checks fail, return false.*/
     while (left < right) {
         let average = (arr[left] + arr[right]) / 2;
         if (average === target) {
             return true;
         } else if (average < target) {
             left++;
         } else {
             right --;
         }
     }
     //target not met
     return false;
}

console.log(averagePair([], 4));