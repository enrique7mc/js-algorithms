'use strict';

function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function BST () {
    this.root = null;
    this.insert = insert;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert (data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
        return;
    }

    let current = this.root;
    let parent;
    while (true) {
        parent = current;
        if (data < current.data) {
            current = current.left;
            if (current == null) {
                parent.left = n;
                break;
            }
        } else {
            current = current.right;
            if (current == null) {
                parent.right = n;
                break;
            }
        }
    }
}

function inOrder (node) {
    if(node == null) return;
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
}

function preOrder (node) {
    if(node == null) return;
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
}

function posOrder (node) {
    if(node == null) return;
    posOrder(node.left);
    posOrder(node.right);
    console.log(node.data);
}

function getMin () {
    let current = this.root;
    while(current.left != null) {
        current = current.left;
    }
    return current.data;
}

function getMax () {
    let current = this.root;
    while(current.right != null) {
        current = current.right;
    }
    return current.data;
}

function find (data) {
    let current = this.root;

    while (current != null) {
        if (current.data === data) {
            return current;
        }

        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
}

function remove (data) {
    this.root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
// console.log("Pos traversal: ");
// posOrder(nums.root);

console.log(nums.getMin());
console.log(nums.getMax());
console.log(nums.find(16));
