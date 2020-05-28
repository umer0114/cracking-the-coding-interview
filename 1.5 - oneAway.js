/* One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
Hints: #23, #97, #130
 */

function checkOneAway(originalString, editedString) {
    let i = 0, j = 0;
    let edits = 0;
    while (i < originalString.length && j < editedString.length) {
        if (edits > 1) {
            return edits;
        }

        if (originalString[i] !== editedString[j]) {
            edits++;
            if (originalString.length < editedString.length) {
                j++;
                continue;
            }
            else if (originalString.length > editedString.length) {
                i++;
                continue;
            }
        }
        j++;
        i++;
    }
    return edits;
}

 function oneAway(originalString, editedString) {

    if (Math.abs(originalString.length - editedString.length) > 1) return false;

    return checkOneAway(originalString, editedString) < 2;
 }

 //oneAway
 console.log('oneAway');
 console.log(oneAway('pale', 'ple'));
 console.log(oneAway('pales', 'pale'));
 console.log(oneAway('pale', 'bale'));
 console.log(oneAway('pale', 'bake'));
 console.log(oneAway('paaaaaalllllleeeeee', 'pbaaaaalllllleeeeee1'));