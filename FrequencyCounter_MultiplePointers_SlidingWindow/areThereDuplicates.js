//accepts a variable number of arguments and checks whether there are any duplicates

//frequency counter solution
function areThereDuplicates1() {
    //create object to hold unique values
    let uniques = {};
    //iterate over number of arguments and add to uniques if unique.
    for (let i = 0; i < arguments.length; i++) {
        let data = arguments[i];
        if (uniques[data]) {
            return true
        } else {
            uniques[data] = 1;
        } 
    }
    //no duplicates
    return false
}

//multiple pointers solution
function areThereDuplicates2(...args) {
    //sort input
    args.sort((a, b) => a > b ? 1 : -1);
    console.log(args);
    //create left pointer i at 0 and right pointer j to point at index 1.
    let i = 0;
    let j = 1;
    //move right pointer j along input arguments from index 1 to end.
    while (j < args.length) {
        //if arguments[j] equals arguments[i] then there is a duplicate, else move the pointers along 1.
        if (args[i] === args[j]) {
            return true;
        } else {
            i++;
            j++;
        }
    }
    return false;
}
console.log(areThereDuplicates2("a", "b", "c", "a"));