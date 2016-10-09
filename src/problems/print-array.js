function printArray(arr) {
    if (arr.length === 1) {
        return `${arr[0]} `;
    }

    return `${arr[0]} ` + printArray(arr.slice(1));
}

function printArrayBackwards(arr) {
    if (arr.length === 1) {
        return `${arr[0]} `;
    }

    return `${arr[arr.length - 1]} ` + printArrayBackwards(arr.slice(0, arr.length - 1));
}

const arr = [1, 2, 3, 4];
console.log(printArrayBackwards(arr));