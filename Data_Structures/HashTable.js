//takes a key, value pair and hashes the key to give a semi-unique index in an array to store the pair.
//for duplicate indices stores in an array at that index using seperate chaining.
//insertion, deletion and access are all O(1) time.

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = [[key, value]];
        } else {
            this.keyMap[hash].push([key, value]);
        }
    }
    get(key) {
        let hash = this._hash(key);
        let column = this.keyMap[hash];
        let i = 0;
        while (column[i][0] !== key && i < column.length) {
            i++;
        }
        return i < column.length ? column[i][1] : undefined;    
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values() {
        //only returns unique values.
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let table = new HashTable();
table.set("pink", 15);
table.set("green", 32);
table.set("yellow", 57);
table.set("blue", 99);

console.log(table);
console.log(table.keys());
console.log(table.values());
console.log(table.get("pink")); //15
console.log(table.get("green")); //32
console.log(table.get("yellow")); //57
console.log(table.get("blue")); //99
