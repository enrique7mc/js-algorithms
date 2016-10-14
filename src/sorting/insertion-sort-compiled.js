/**
 * Created by enrique.munguia on 10/13/16.
 */

const { sampleArray, swap } = require('./utils');

/*
    Insertion Sort

    Complexity:
    Time: O(n^2)
    Space: O(1)
    Stable
    Adaptive
 */
function insertionSort(arr) {
    let sortedListLastIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let currentIndex = i;
        let swapIndex = sortedListLastIndex;
        while (current < arr[swapIndex] && swapIndex >= 0) {
            swap(arr, currentIndex--, swapIndex--);
        }
        sortedListLastIndex++;
    }
}

console.log(sampleArray);
insertionSort(sampleArray);
console.log(sampleArray);

//# sourceMappingURL=insertion-sort-compiled.js.map