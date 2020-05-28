/* String Rotation: Assume you have a method i5Substring which checks if one word is a substring
of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat" ). */

function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let index1 = 0, index2 = 0, firstMatch = false;

    while (index1 < str1.length || index2 < str2.length) {
        if (str1[index1] === str2[index2]) {
            index1++;
            index2++;
            firstMatch = true;
        }
        else if (firstMatch) {
            index1 = 0;
            firstMatch = false;
        }
        else {
            index1++;
        }
    }

    if (index1 === index2 && index1 === str1.length) {
        return true;
    }
    return false;
}

console.log('stringRotation');
console.log(stringRotation('waterbottle', 'erbottlewat'));