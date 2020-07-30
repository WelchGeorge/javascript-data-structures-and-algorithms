//using binary search tree but can be applied to any tree.
//breadth first search searches siblings before children.

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const recurInsert = ((node, newNode) => {
                if (newNode.value < node.value) {
                    if (!node.left) node.left = newNode;
                    else recurInsert(node.left, newNode);
                } else if (newNode.value > node.value) {
                    if (!node.right) node.right = newNode;
                    else recurInsert(node.right, newNode);
                } else  {
                    return null;
                }
            });
            recurInsert(this.root, newNode);
        }
        return this;
    }
    BreadthFirstSearch() {
        //create a queue and a variable to store the values of nodes visited.
        let queue = [];
        let visited = [];
        let node = this.root;
        //place root in queue.
        queue.push(node);

        //loop while queue is not empty.
        while (queue.length) {
            //dequeue a node and push value into variable that stores nodes.
            node = queue.shift();
            visited.push(node.value);

            //if the node dequeued has a left add it to the queue.
            if (node.left) queue.push(node.left);

            //if the node dequeued has a right add it to the queue.
            if (node.right) queue.push(node.right);

        }

        //return the variable that stores the values.
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(20);
console.log(tree);
console.log(tree.BreadthFirstSearch());


