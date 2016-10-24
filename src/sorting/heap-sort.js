/**
 * Created by enrique.munguia on 10/24/16.
 */

const { sampleArray, swap } = require('./utils');

/*
 Heap Sort

 Complexity:
 Time: O(n log n)
 Space: O(1)
 Not stable
 Not adaptive
 */

function getParentIndex(index, endIndex) {
    if(index < 0 || index > endIndex) return -1;

    return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index, endIndex) {
    const leftChildIndex = index * 2 + 1;
    if(leftChildIndex > endIndex) return -1;

    return leftChildIndex;
}

function getRightChildIndex(index, endIndex) {
    const rightChildIndex = index * 2 + 2;
    if(rightChildIndex > endIndex) return -1;

    return rightChildIndex;
}

function percolateDown(array, index, endIndex) {
    const leftChildIndex = getLeftChildIndex(index, endIndex);
    const rightChildIndex = getRightChildIndex(index, endIndex);

    if(leftChildIndex !== -1 && array[leftChildIndex] > array[index]) {
        swap(array, leftChildIndex, index);
        percolateDown(array, leftChildIndex, endIndex);
    }

    if(rightChildIndex !== -1 && array[rightChildIndex] > array[index]) {
        swap(array, rightChildIndex, index);
        percolateDown(array, rightChildIndex, endIndex);
    }
}

function heapify(array, endIndex) {
    let index = getParentIndex(endIndex, endIndex);
    while(index >= 0) {
        percolateDown(array, index, endIndex);
        index--;
    }
}

function heapSort(array) {
    heapify(array, array.length - 1);

    let endIndex = array.length - 1;
    while(endIndex > 0) {
        swap(array, 0, endIndex);
        endIndex--;
        percolateDown(array, 0, endIndex);
    }
}

console.log(sampleArray);
heapSort(sampleArray);
console.log(sampleArray);