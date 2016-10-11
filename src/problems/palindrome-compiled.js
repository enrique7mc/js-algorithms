/**
 * Created by enrique.munguia on 10/9/16.
 */

function clearInput(str) {
    const clearStr = str.split(' ').join('').toLocaleLowerCase();
    if (clearStr.length % 2 === 0) return clearStr;

    let arrStr = clearStr.split('');
    arrStr.splice(Math.floor(clearStr.length / 2), 1);
    return arrStr.join('');
}

function isPalindrome(str) {
    if (str.length === 2) {
        return str[0] === str[1];
    }

    return isPalindrome(`${ str[0] }${ str[str.length - 1] }`) && isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome(clearInput('radare')));

//# sourceMappingURL=palindrome-compiled.js.map