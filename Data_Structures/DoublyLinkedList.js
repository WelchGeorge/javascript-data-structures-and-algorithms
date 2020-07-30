//piece of data - val
//reference to next node - next
//reference to previous node - previous.
//insertion O(1) time.
//removal O(1) time.
//searching O(n) time. technically O(n/2).
//access O(n) time.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) return undefined;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.previous;
            this.tail.next = null;
            removed.previous = null;
        }
        this.length--;
        return removed;
    }
    shift() {
        if (this.length === 0) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.previous = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            let forwards = this.head;
            for (let i = 0; i < index; i++) {
                forwards = forwards.next;
            }
            return forwards;
        } else {
            let backwards = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                backwards = backwards.previous;
            }
            return backwards;
        }
    }
    set(index, val) {
        let node = this.get(index);
        if (node === null) return false;
        node.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let before = this.get(index - 1);
        let after = before.next;
        before.next = newNode;
        newNode.previous = before;
        newNode.next = after;
        after.previous = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removed = this.get(index);
        let before = removed.previous;
        let after = removed.next;
        before.next = after;
        after.previous = before;
        removed.next = null;
        removed.previous = null;
        this.length--;
        return removed;
    }
    reverse() {
        let temp = null;
        let current = this.head;
        while (current !== null) {
            temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }
        if (temp !== null) this.head = temp.previous;
        return this;
    }
}

let list = new DoublyLinkedList();


list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");
list.push("f");
list.remove(4);

console.log(list);


