//given 2 strings, check to see if they are anagrams of each other.
function validAnagram(string1, string2){

    //if strings are different lengths cannot be an anagram.
    if (string1.length != string2.length) {
        return false;
    }

    //create empty objects to hold character frequencies for each string.
    let charFrequency1 = {};
    let charFrequency2 = {};

    // for each character in each string add the character as a key to the corresponding object and give the value of that characters frequency to the key.
    for (let char of string1) {
        charFrequency1[char] ? charFrequency1[char]++ :  charFrequency1[char] = 1;
    }
    for (let char of string2) {
        charFrequency2[char] ? charFrequency2[char]++ :  charFrequency2[char] = 1;
    }

    //check if objects are equal in keys and values.
    for (let key in charFrequency1) {
        if (!charFrequency2[key]) {
            return false;
        } else if (charFrequency2[key] != charFrequency1[key]) {
            return false;
        }
    }

    return true;

}



const TESTS = [["abc", "abc"], ["", ""], ["cat", "cta"], ["cinema", "iceman"], ["chicken", "chickes"], ["abc", "abcd"], ["1234", "4312"]];

for (test of TESTS) {
    console.log(test[0], test[1]);
    console.log(validAnagram(test[0], test[1]));
}