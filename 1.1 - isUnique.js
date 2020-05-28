/* Is Unique: Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures? 
Hints */

function isUniqueWithHashMap(str) {
    const uniqueChars = new Array (256);
    for (let ch of str) {
        if (uniqueChars[ch]) {
            return false;
        }
        uniqueChars[ch] = 1;
    }
    return true;
}

function isUniqueBruteForce(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

//isUniqueWithHashMap
console.log('\nisUniqueWithHashMap')
console.log(isUniqueWithHashMap('abcdef'));
console.log(isUniqueWithHashMap('aasfsfdsd'));
console.log(isUniqueWithHashMap('aasfsfddddddddddddddssssssssssssssssssssssssssssssdsd'));
console.log(isUniqueWithHashMap('1234567890-=qwertyuiop[]zxcvbnm,/asdfghjkl'));

//isUniqueBruteForce
console.log('\nisUniqueBruteForce')
console.log(isUniqueBruteForce('abcdef'));
console.log(isUniqueBruteForce('aasfsfdsd'));
console.log(isUniqueBruteForce('aasfsfddddddddddddddssssssssssssssssssssssssssssssdsd'));
console.log(isUniqueBruteForce('1234567890-=qwertyuiop[]zxcvbnm,/asdfghjkl'));

