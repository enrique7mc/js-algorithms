/**
 * Created by enrique.munguia on 10/14/16.
 */
const { almostSortedArray, swap } = require('./utils');
/*
     Bubble Sort

     Complexity:
     Time: O(n^2)
     Space: O(1)
     Stable
     Adaptive
 */
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let numberOfSwaps = 0;
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                swap(arr, j, j + 1);
                numberOfSwaps++;
            }
        }
        if (numberOfSwaps === 0) {
            break;
        }
    }
}

console.log(almostSortedArray);
bubbleSort(almostSortedArray);
console.log(almostSortedArray);