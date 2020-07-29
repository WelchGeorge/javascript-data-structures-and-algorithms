//Last In First Out.

//linked list implementation:
//O(1) time for insertion and removal.
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            let current = this.first;
            this.first = node;
            this.first.next = current;
        }
        this.size++;
    }
    pop() {
        if (this.size === 0) return null;
        let temp = this.first;
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp.value;        
    }
}

stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");
console.log(stack);
console.log(stack.pop());
console.log(stack);
