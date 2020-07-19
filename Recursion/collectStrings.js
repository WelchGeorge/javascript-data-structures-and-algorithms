//given an object, returns an array of all strings in the object.
function collectStrings(obj) {
    let output = [];
    for (let key in obj) {
        if (typeof obj[key] === "object") output = output.concat(collectStrings(obj[key]));
        if (typeof obj[key] === "string") output.push(obj[key]);
    }
    return output;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); //["foo", "bar", "baz"]