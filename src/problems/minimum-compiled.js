/**
 * Created by enrique.munguia on 10/9/16.
 */

function findMinimum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    return Math.min(arr[0], findMinimum(arr.slice(1)));
}

const arr = [1, 5, 9, 11, 3, 10];
console.log(findMinimum(arr));

//# sourceMappingURL=minimum-compiled.js.map