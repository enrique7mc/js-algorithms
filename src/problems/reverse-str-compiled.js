/**
 * Created by enrique.munguia on 10/11/16.
 */

/*
   - Split the string in two parts
   - First part is only the first character
   - Second part is the rest of the string
   - Reverse the second part and append the first part at the end
   - Return the result

   Complexity
   Time: O(n)
   Space: O(n) (callstack)
 */

function reverseString(str) {
    if (str === null || str === undefined) return;

    if (str.length === 0) return str;
    const first = str[0];
    const second = str.substring(1);

    return reverseString(second) + first;
}

// interative version
function reverseStringIterative(str) {
    const arr = [...str];
    for (let i = 0; i < arr.length / 2; i++) {
        let j = arr.length - 1 - i;
        swap(arr, i, j);
    }

    return arr.join('');
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(reverseString('Hola mundo'));
console.log(reverseStringIterative('Hola mundo'));

//# sourceMappingURL=reverse-str-compiled.js.map