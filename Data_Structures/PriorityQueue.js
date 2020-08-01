//using min binary heap implementation.

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        //insert to values then bubble up based on priority, with low numbers higher. swapping inserted with parents untill heap requirements met.
        let node = new Node(val, priority);
        this.values.push(node);
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    dequeue() {
        //swap first and last in values and pop to remove and return highest priority value (lowest number).
        const min = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length === 0) return min;
        this.values[0] = end;
        
        //new root bubbles down to correct position.
        let parentIndex = 0;
        const length = this.values.length;
        const node = this.values[0];
        while(true) {
            let leftIndex = (2 * parentIndex) + 1;
            let rightIndex = (2 * parentIndex) + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild.priority < node.priority) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if (
                        (swap === null && rightChild.priority < node.priority) || 
                        (swap !== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = node;
            parentIndex = swap;
        }
        return min;
    }
}

let priorityQ = new PriorityQueue();
priorityQ.enqueue("common cold", 5);
priorityQ.enqueue("gunshot wound", 1);
priorityQ.enqueue("high fever", 4);
priorityQ.enqueue("broken arm", 2);
priorityQ.enqueue("glass in foot", 3);
console.log(priorityQ);
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());
console.log(priorityQ.dequeue());