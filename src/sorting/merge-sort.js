/**
 * Created by enrique.munguia on 10/14/16.
 */
const { sampleArray } = require('./utils');
/*
     Merge Sort

     Complexity:
     Time: O(n log(n))
     Space: O(n)
     Stable
*/

function mergeSort(arr) {
    let length = arr.length;
    if (length === 1) return;
    
    let mid = length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, length);

    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
}

function merge(target, left, right) {
    let i = 0, j = 0, k = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            target[k++] = left[i++];
        } else {
            target[k++] = right[j++];
        }
    }

    while (i < left.length) {
        target[k++] = left[i++];
    }

    while (j < right.length) {
        target[k++] = right[j++];
    }
}

console.log(sampleArray);
mergeSort(sampleArray);
console.log(sampleArray);

