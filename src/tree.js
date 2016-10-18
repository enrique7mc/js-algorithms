'use strict';

function Node(data, children) {
    this.data = data;
    this.children = children || [];
}

Node.prototype.addChild = function (node) {
  this.children.push(node);
};

function BFS(root) {
    const queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        console.log(node.data);
        for (const child of node.children) {
            queue.push(child);
        }
    }
}

function getGeneration(root, gen) {
    if (gen === 0) { return root; }
    let queue = [root];
    let children = [];
    let depth = 0;
    while(queue.length > 0) {
        while (queue.length > 0) {
            let parent = queue.shift();
            for (const child of parent.children) {
                children.push(child);
            }
        }
        if  (++depth === gen) {
            return children;
        }

        while (children.length > 0) {
            queue.push(children.shift());
        }
    }
}

function getGenerationRecursive(root, depth, gen) {
    if (depth === gen) { return root; }
    depth++;
    let result = [];
    for(let child of root.children) {
        result.push(getGenerationRecursive(child, depth, gen));
    }

    return result;
}



let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

let n3 = new Node(3, [n4, n5, n6]);
let n2 = new Node(2, [n8, n7]);
let n1 = new Node(1, [n3, n2]);

// BFS(n1);

let result = getGenerationRecursive(n1, 0, 2);
// let result = getGeneration(n1, 2);
console.log(result);