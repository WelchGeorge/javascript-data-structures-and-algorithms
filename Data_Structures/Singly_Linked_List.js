//piece of data - val
//reference to next node - next
//insertion O(1) time.
//removal O(1) or O(n) time depending on index.
//searching O(n) time.
//access O(n) time.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        let curr = this.head;
        let pre = curr;
        while (curr.next !== null) {
            pre = curr;
            curr = curr.next;
        }
        
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }
    shift() {
        if (this.length === 0) return undefined;
        let curr = this.head;
        this.head = curr.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) { 
        if (index < 0 || index  >= this.length) return null;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) { 
        if (index < 0 || index  > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let pre = this.get(index - 1);
        let newNode = new Node(val);
        let temp = pre.next
        newNode.next = temp;
        pre.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index  > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        let pre = this.get(index - 1)
        let removed = pre.next;
        pre.next = pre.next.next;
        this.length--;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let pre = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");
list.push("f");
list.push("g");
console.log(list);
console.log(list.reverse());
console.log(list);




