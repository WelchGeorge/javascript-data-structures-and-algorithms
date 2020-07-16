//given a string, returns the length of the longest unique substring.
function findLongestSubstring(str) {
    //create a total to hold the current longest substring
    let longest = 0;
    //create pointers to start of substring.
    let start = 0;
    
    //find the longest substring. create an object to hold unique characters
    let uniques = {};
    for (let end = 0; end < str.length; end++) {
        let char = str[end];
        if (uniques[char]) {
            start = Math.max(start, uniques[char]);
        }
        //set longest to subarray length if longer
        longest = Math.max(longest, end - start + 1);
        //store index of next char so no double counting
        uniques[char] = end + 1;
    }
    return longest;
}

console.log(findLongestSubstring(""));