/* binarySearch */

function binarySearchRecursive(array, start, end, target) {
    let mid = start + Math.floor((end - start)/2);

    if (end < start) {
        return false;
    }

    if (array[mid] === target) {
        return true;
    }

    if (target < array[mid]) {
        return binarySearchRecursive(array, start, mid - 1, target);
    }
    return binarySearchRecursive(array, mid+1, end, target);
}

function binarySearchIterative(array, target) {
    let start = 0;
    let end = array.length;

    while(start < end) {
        let mid = start + Math.floor((end - start)/2);
        if (array[mid] === target) {
            return true;
        }

        if (target < array[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
}

let arr = [ 1, 2, 3, 4, 5, 6, 7, 7 ];
console.log(binarySearchRecursive(arr, 0, arr.length, 8));
console.log(binarySearchIterative(arr, 8));