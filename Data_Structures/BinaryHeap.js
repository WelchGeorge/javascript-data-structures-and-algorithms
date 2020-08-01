//every parent has at most two children.
//in a max heap every child is always less than its parent.
//in a min heap every child is alwasy greater than its parent.
//all children are as full as can be and left children are filled first.
//average time complexity O(log n) for insertion and removal. Search is O(n).

//array implementation: for each node at index n, the left child is at 2n+1 and right at 2n+2.

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        //insert to values then bubble up, swapping inserted with parents untill heap requirements met.
        this.values.push(val);
        let index = this.values.length - 1;
        const element = val;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    extractMax() {
        //swap first and last in values and pop to remove and return largest value.
        const max = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length === 0) return max;
        this.values[0] = end;
        
        //new root bubbles down to correct position.
        let parentIndex = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftIndex = (2 * parentIndex) + 1;
            let rightIndex = (2 * parentIndex) + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild > element) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if (
                        (swap === null && rightChild > element) || 
                        (swap !== null && rightChild > leftChild)
                    ) {
                        swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = element;
            parentIndex = swap;
        }
        return max;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);

heap.insert(39);

heap.insert(33);

heap.insert(18);

heap.insert(27);

heap.insert(12);

heap.insert(55);

console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
