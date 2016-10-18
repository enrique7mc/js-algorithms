/**
 * Created by enrique.munguia on 10/18/16.
 */

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function isLeaf (node) {
    return node.left == null && node.right == null;
}

function sumRootToLeafs(node) {
    if(!node) return 0;

    node.sum = 0;
    let result = 0;
    const queue = [node];
    while(queue.length) {
        let current = queue.shift();
        let currentSum = (current.sum * 10) + current.data;
        if (isLeaf(current)) {
            result += currentSum;
            continue;
        }

        if(current.left) {
            let left = current.left;
            left.sum = currentSum;
            queue.push(left);
        }

        if(current.right) {
            let right = current.right;
            right.sum = currentSum;
            queue.push(right);
        }
    }

    return result;
}

function sumRootToLeafsRecursive(node) {
    return sumHelper(node, 0);
}

function sumHelper(node, partialSum) {
    if(!node) return 0;

    partialSum = (partialSum * 10) + node.data;

    if(isLeaf(node)) {
        return partialSum;
    }

    return sumHelper(node.left, partialSum) + sumHelper(node.right, partialSum);
}

let n4 = new Node(4);
let n5 = new Node(2);
let n6 = new Node(5);

let n3 = new Node(3, n5, n6);
let n2 = new Node(2, n4);
let n1 = new Node(1, n2, n3);

const result = sumRootToLeafs(n1);
const result2 = sumRootToLeafsRecursive(n1);
console.log(result);
console.log(result2);