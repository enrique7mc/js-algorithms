/**
 * Created by enrique.munguia on 10/11/16.
 */

/*
   - Split the string in two parts
   - First part is only the first character
   - Second part is the rest of the string
   - Reverse the second part and append the first part at the end
   - Return the result
 */

function reverseString(str) {
    if(str === null || str === undefined) return;

    if(str.length === 0) return str;
    const first = str[0];
    const second = str.substring(1);

    return reverseString(second) + first;
}

console.log(reverseString('Hola mundo'));