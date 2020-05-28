/* 8.8 - permutationWithDups
Permutations with Dups: Write a method to compute all permutations of a string whose characters
are not necessarily unique. The list of permutations should not have duplicates. */

function permutationsWithoutDups(str, i, arrChar) {
    let currentPermutations;
    if (str.length === i) {
        currentPermutations = [];
        return currentPermutations ;
    }
    currentPermutations = permutationsWithoutDups(str, i + 1);
    for (let j = 0; j < str.length; j++) {
        if (str[i] !== str[j]) {
            currentPermutations.push(swapStr(str, j, i));
        }
    }
    return currentPermutations;
}

function swapStr(str, first, last){
    var arr = str.split('');
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    return arr.join('');
}

console.log(permutationsWithoutDups('123', 0, {}));
