// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

function sumCharacterFrequency(str, charArray) {
    for (let ch of str) {
        if (!charArray[ch]) {
            charArray[ch] = 1;
        }
        charArray[ch] += 1;
    }
    return charArray;
}

function checkPermutation(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let charArray = new Array(256);
    charArray = sumCharacterFrequency(str1, charArray);

    for (let ch of str2) {
        if (charArray[ch] === undefined || charArray[ch] === 0) {
            return false;
        }
        charArray[ch] -= 1;
    }

    return true;

}

//checkPermutation
console.log('checkPermutation');
console.log(checkPermutation('str1', '2tsr'));
console.log(checkPermutation('str1dddd', '1tsrdddd'));
console.log(checkPermutation('geeksforgeeks', 'forgeeksgeeks'));