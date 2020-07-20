//given a long string and a pattern, return number of occurences of the pattern within the long string.
function naiveStringSearch(long, pattern) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (long[i + j] !== pattern[j]) {
                break;
            } else if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveStringSearch("trololol", "lol"));//2