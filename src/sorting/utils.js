/**
 * Created by enrique.munguia on 10/13/16.
 */

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function randomArray(length = 10, max = 100) {
    const result = new Array(10);
    for(let i = 0; i < length; i++) {
        result[i] = Math.floor(Math.random() * max);
    }

    return result;
}

module.exports = {
    sampleArray: [4, 5, 1, 3, 2, 6, 9, 8, 7, 0],
    almostSortedArray: [0, 2, 1, 3, 4, 5, 6, 8, 7, 9],
    swap: swap,
    randomArray: randomArray
};