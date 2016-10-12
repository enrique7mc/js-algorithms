'use strict';

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
}

function insert(data) {
  const n = new Node(data, null, null);
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

function inOrder(node) {
  if (node == null) return;
  inOrder(node.left);
  console.log(node.data);
  inOrder(node.right);
}

function inOrderIterative(node) {
  if (node == null) return;
  let pending = [];
  let str = '';
  let current = node;

  while(current != null) {
    pending.push(current);
    current = current.left;
  }
  while (pending.length > 0) {
    current = pending.pop();
    str += current.data + ' ';
    if (current.right) {
      current = current.right;
      while (current != null) {
        pending.push(current);
        current = current.left;
      }
    }
  }
  console.log(str);
}

function depthFirstSearchIterative (node) {
  let nodes = [node];
  while(nodes.length) {
    var current = nodes.pop();
    console.log(current.data);

    if (current.left) {
      nodes.push(current.left);
    }

    if (current.right) {
      nodes.push(current.right);
    }
  }
}

function secondLargest (node) {
  let current = node;

  if (!current.right) {
    return current.parent.data;
  }

  let parent = current;
  current = current.right;
  current.parent = parent;
  return secondLargest(current);
}

function secondLargestIterative (node) {
  let nodes = [];
  nodes.push({ node, parent: null});
  while(nodes.length) {
    let popped = nodes.pop();
    let current = popped.node;
    let parent = popped.parent;

    if (current.right) {
      nodes.push({node: current.right, parent: current});
    } else {
      return parent.data;
    }
  }
}

function getHeight(node) {
  // height of empty node = -1
  if (!node) {
    return -1;
  }

  // recursively get Height of left and right
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  // height is equal to the greatest height plus 1
  return Math.max(leftHeight, rightHeight) + 1;
}

function preOrder(node) {
  if (node == null) return;
  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
}

function posOrder(node) {
  if (node == null) return;
  posOrder(node.left);
  posOrder(node.right);
  console.log(node.data);
}

function getMin() {
  let current = this.root;
  while (current.left != null) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  let current = this.root;
  while (current.right != null) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
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

function remove(data) {
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
    const tempNode = getSmallest(node.right);
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

function isLeaf (node) {
  return node.left == null && node.right == null;
}

function sameTrees(treeA, treeB) {
  if(!treeA && !treeB) return true;
  if((!treeA || !treeB) || (treeA.data !== treeB.data)) return false;

  return sameTrees(treeA.left, treeB.left) && sameTrees(treeA.right, treeB.right);
}

const nums = new BST();
nums.insert(1);
nums.insert(2);
nums.insert(4);
nums.insert(5);
nums.insert(3);

const nums2 = new BST();
nums2.insert(1);
nums2.insert(20);
nums2.insert(4);
nums2.insert(5);
nums2.insert(3);

console.log(sameTrees(nums.root, nums2.root));

console.log("In traversal: ");
// inOrder(nums.root);
inOrderIterative(nums.root);
//console.log(secondLargest(nums.root));
console.log(getHeight(nums.root));
