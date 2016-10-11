/**
 * Created by enrique.munguia on 10/11/16.
 */

/*
    Get all subsets from a set

    - Base case, empty array returns the empty set
    - Get the first element in the set
    - Get the subsets of the remaining elements
    - To calculate the result add each of those subsets
      AND add the subset plus the first element
    - return the result

    Complexity
    Time: O(2^n)
 */

function subsets(arr) {
    if(arr.length === 0)  return [[]];

    const first = arr[0];
    const remainingSubsets = subsets(arr.slice(1));
    const result = [];
    for(const subset of remainingSubsets) {
        result.push(subset);
        result.push([first, ...subset]);
    }

    return result;
}

const arr = [1, 2, 3];
const result = subsets(arr);
console.log(result);