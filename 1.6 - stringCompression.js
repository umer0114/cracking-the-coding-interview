/* String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints: #92, # 11 0 */

function compress(str) {

    let compressedString = '';
    let shiftCharacter = str[0];
    let characterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (shiftCharacter === str[i]) {
            characterCount++;
        }
        else {
            compressedString += shiftCharacter + characterCount;
            shiftCharacter = str[i];
            characterCount = 1;
        }
    }
    if (characterCount >= 1) {
        compressedString += shiftCharacter + characterCount;
    }

    return compressedString.length > str.length ? str: compressedString;
}

//String Compression
console.log('compress');
console.log(compress('aabcccccaaa'));
console.log(compress('aa'));
console.log(compress('a'));
console.log(compress('aaaaaabbbbbba'));