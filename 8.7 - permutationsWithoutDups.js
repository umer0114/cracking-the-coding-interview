/* Permutations without Dups: Write a method to compute all permutations of a string of unique
characters.
Hints: #150, #185, #200, #267, #278, #309, #335, #356 */


function permutationsWithoutDups(str, i) {
    let currentPermutations;
    if (str.length === i) {
        currentPermutations = [str];
        return currentPermutations ;
    }
    currentPermutations = permutationsWithoutDups(str, i + 1);
    for (let j = 0; j < str.length; j++) {
        if (i !== j) {
            currentPermutations.push(swapStr(str, j, i));
        }
    }
    return currentPermutations;
}
function permutationsWithoutDupsIterative(str) {

    let ch = str[0];
    str = str.substring(1);

    for (let i = 0; i < str.length + 1; i++) {
        console.log(str.substring(0, i) + ch + str.substring(i))
    }
}

function swapStr(str, first, last){
    var arr = str.split('');
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    console.log(arr.join(''));
    return arr.join('');
}

function permutations(str) {
    let i;
    if (str.length === i) {
        return str;
    }
    for (i = 0; i < str.length + 1; i++) {
        console.log(str[i] + permutations(str.slice(0, i) + str.slice(i+1, str.length)));
    }
}

// console.log(permutationsWithoutDups('abc', 0));
permutationsWithoutDupsIterative('abcd');