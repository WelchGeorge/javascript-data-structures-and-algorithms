//given an array of words, return the same array all capitalized.
function capitalizeWords(arr) {
    let newArr = [];
    if (arr.length === 1) return arr[0].toUpperCase();
    newArr.push(arr[0].toUpperCase());
    return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); //['I', 'AM', 'LEARNING', 'RECURSION']