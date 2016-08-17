"use strict";

function mergeSort (arr) {
    let length = arr.length;
    if (length === 1) {
        return arr[0];
    }
    let mid = length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, length);

    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
}

function merge (target, left, right) {
    let i = 0, j = 0, k = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            target[k] = left[i];
            k++;
            i++;
        } else {
            target[k] = right[j];
            k++;
            j++;
        }
    }

    while (i < left.length) {
        target[k] = left[i];
        k++;
        i++;
    }

    while (j < right.length) {
        target[k] = right[j];
        k++;
        j++;
    }
}

function quickSort(arr) {
    quickSortImp(arr, 0, arr.length - 1);
}

function quickSortImp (arr, start, end) {
    if (start >= end) return;

    let pIndex = naivePartition(arr, start, end);
    quickSortImp(arr, start, pIndex - 1);
    quickSortImp(arr, pIndex + 1, end);
}

function naivePartition(arr, start, end) {
    let pivot = arr[end];
    let pIndex = start;
    for (let i = start; i < end; i++){
        if (arr[i] <= pivot) {
            swap(arr, i, pIndex);
            pIndex++;
        }
    }

    swap(arr, pIndex, end);
    return pIndex;
}

function dutchFlagPartition (arr, start, end) {
    let pivot = arr[end];
    let left = start;
    let right = end;
    let middle = start;

    while (middle < right) {
        if (arr[middle] < pivot) {
            swap(arr, left++, middle++);
        } else if (arr[middle] === pivot) {
            middle++;
        } else {
            swap(arr, middle, right--);
        }
    }
}

function swap (arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// tests
// let target = new Array(8);
// let a = [1, 2, 6, 7];
// let b = [4, 5, 8, 10];
// let result = merge(target, a, b);
// console.log(result);

let arr = [2, 5, 3, 6, 7, 1, 8, 4];
// mergeSort(arr);
// console.log(arr);
quickSort(arr, 0, arr.length - 1)
console.log(arr);
