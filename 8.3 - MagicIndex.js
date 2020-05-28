/* Magic Index: A magic index in an array A [e ... n -1] is defined to be an index such that A[ i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A.
FOLLOW UP
What if the values are not distinct? */

function magicIndexBrute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return true;
        }
    }
    return false;
}

function magixIndexBinarySearch(arr, start, end) {
    if (start > end) {
        return false;
    }
    let mid = start + Math.floor((end - start)/2);

    if (arr[mid] === mid) {
        return true;
    }

    if (arr[mid] < mid) {
        return magixIndexBinarySearch(arr, mid + 1, end);
    }
    return magixIndexBinarySearch(arr, start, mid -1);
}

let arr = [-40, -20, -1, 1, 2, 3, 5, 7, 12, 9, 13];
console.log(arr);
console.log(magicIndexBrute(arr));
console.log(magixIndexBinarySearch(arr, 0, arr.length - 1));