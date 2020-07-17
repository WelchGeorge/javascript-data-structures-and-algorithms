//given an array of strings, capitalize the first letter of each string.
function capitalizeFirst(arr) {
    if (arr.length === 0) return [];
    let newArr = [];
    let capitalized = (arr[0].slice(0,1)).toUpperCase().concat(arr[0].slice(1));
    if (arr.length === 1) return capitalized;
    newArr.push(capitalized);
    return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); //["Car", "Taco", "Banana"]
console.log(capitalizeFirst([]));