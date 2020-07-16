//Given two positive integers, find out if the two numbers have the same frequency of digits
function sameFrequency(num1, num2) {
    let int1 = num1.toString();
    let int2 = num2.toString();
    console.log(int1 + "\n" + int2);
    //edge case: false if inputs are different lengths.
    if (int1.length !== int2.length) return false;

    //create objects to store frequencies of unique digits.
    let frequency1 = {};
    let frequency2 = {};

    //fill frequency1 object
    for (let i = 0; i < int1.length; i++) {
        let digit = int1[i];
        frequency1[digit] ? frequency1[digit]++ : frequency1[digit] = 1;
    }
    
    //fill frequency2 object
    for (let j = 0; j < int2.length; j++) {
        let digit = int2[j];
        frequency2[digit] ? frequency2[digit]++ : frequency2[digit] = 1;
    }
    
    //return true if objects are equal.
    for (let key in frequency1) {
        if (!frequency2[key]) {
            console.log("no key")
            return false;
        } else if (frequency1[key] != frequency2[key]) {
            console.log("wrong frequency");
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(22,222));