//for each node traverse the entire left side then the entire right side.
//using BST as tree but applies to any tree.

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
    DFSPreOrder() {
        //create variable to store visited.
        let visited = [];

        //store the node to start search from in a variable, current.
        let current = this.root;

        //helper funstion accepts a node.
        const traverse = ((node) => {

            //push value of node to visited.
            visited.push(node.value);

            //if node has a left, call the helper with the left.
            if (node.left) traverse(node.left);

            //if the node has a right, call the helper with the right.
            if (node.right) traverse(node.right);

        });

        //invoke helper with current.
        traverse(current);

        //return visited.
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
console.log(tree.DFSPreOrder());

