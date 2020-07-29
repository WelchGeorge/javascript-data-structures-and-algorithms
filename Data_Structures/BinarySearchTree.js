//every parent has at most two children.
//every left child is ALWAYS less than its parent.
//every right child is ALWAYS greater than its parent.
//insert and search are both O(log n) time in average case; worst O(n).

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
    find(val) {
        if (this.root === null) {
            return null;
        } else {
            const recurFind = ((val, node) => {
                if (val > node.value) {
                    if (!node.right) return null;
                    else return recurFind(val, node.right);
                } else if (val < node.value) {
                    if (!node.left) return null;
                    else return recurFind(val, node.left);
                } else {
                    return node;
                }
            });
            return recurFind(val, this.root);
        }
        
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5)
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(bst.find(5));