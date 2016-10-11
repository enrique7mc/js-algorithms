/**
 * Created by enrique.munguia on 10/11/16.
 */

/*
    Binary Search

    - Get the middle element in the array
    - If it's the element we are looking for, return int
    - Else check if  middle > element, recursively call with the right half
    - If middle < element, recursively call with the left half
    - If the array has zero elements return null

    Complexity
    Space: O(n) callstack
    Time: O(log(n))
 */

function binarySearch(arr, element, min = 0, max = arr.length) {
    if(!Array.isArray(arr)) throw new Error('Not an array');
    if(min > max)  return -1;

    const middleIndex = min + (max - min) / 2;
    const middleElement = arr[middleIndex];
    if(middleElement === element) return middleIndex;
    if(element > middleElement) {
        return binarySearch(arr, element, middleIndex + 1, max);
    } else {
        return binarySearch(arr, element, min, middleIndex - 1);
    }
}

const arr = [4, 5, 11, 12, 20, 34, 38, 40, 48, 59, 68, 69, 80, 100];
console.log(binarySearch(arr, 100));