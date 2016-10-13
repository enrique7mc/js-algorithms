/**
 * Created by enrique.munguia on 10/13/16.
 */
const { randomArray, swap } = require('./utils');

/*
    Selection sort
    Complexity:
    Time O(n^2)
    Space: O(1)
    Not stable
    Not adaptive
 */
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
}

// const arr = [4, 5, 1, 3, 2, 6, 9, 8, 7, 0];
const arr = randomArray();
console.log(arr);
selectionSort(arr);
console.log(arr);