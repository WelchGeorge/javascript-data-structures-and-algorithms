//given two strings, check whether string 1 is a subsequence of string 2 i.e. the same letters appear in the same order (not neccesarily grouped).
function isSubsequence(string1, string2) {
    //create a pointer to move through the first string starting at the start.
    let j = 0;
    //create a pointer to move through the second string.
    for(let i = 0; i < string2.length; i++) {
        /*if the value at the i is the same as the value of j increase j by 1.
        if j reaches the length of string 1, substring found so return true. else return false.*/
        if (string2[i] == string1[j]) {
            if (j == string1.length - 1) {
                return true;
            } else {
                j++;
            }
        } 
    }
    //no matches
    return false;
}

console.log(isSubsequence("abc", "acb"));