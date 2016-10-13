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
    for (let i = 0; i < length; i++) {
        result[i] = Math.floor(Math.random() * max);
    }

    return result;
}

module.exports = {
    swap: swap,
    randomArray: randomArray
};

//# sourceMappingURL=utils-compiled.js.map