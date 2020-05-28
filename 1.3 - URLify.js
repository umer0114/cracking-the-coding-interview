// URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith "J 13
// Output: "Mr%20J ohn%20Smith"
// Hints: #53, #7 78

function replaceSpace(str, currentIndex, len) {
    let currentPointer = len + 1;
    for (let j = currentPointer; j > currentIndex; j --) {
        str[j] = str[j - 2];
    }
    str[currentIndex] = '%';
    str[currentIndex + 1] ='2';
    str[currentIndex + 2] = '0';

    return len + 2;
}

function URLify(str, len) {
    const charArray = str.split('');
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === ' ') {
            len = replaceSpace(charArray, i, len);
        }
    }
    return charArray.join('');
}

//checkPermutation
console.log('URLify');
console.log(URLify('Mr John Smith    ', 13));