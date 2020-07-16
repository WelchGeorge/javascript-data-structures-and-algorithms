//given a string, returns the reverse of that string.
function reverse(string) {
    if (string.length === 0) return "";
    let output = string[string.length - 1];
    return output.concat(reverse(string.slice(0,string.length - 1)));
}

console.log(reverse("hello"));