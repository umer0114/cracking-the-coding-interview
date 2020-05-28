/* Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rea rrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.) */

function populateFrequencyMap(str, frequencyMap) {
    [...str].forEach(ch => {
        if (!frequencyMap[ch]) {
            frequencyMap[ch] = 1;
        } else {
            frequencyMap[ch] += 1;
        }
    });
    return frequencyMap;
}

function isPalindromePermutation(str) {
    let frequencyMap = {};
    let oddCharacterOccurences = 0;

    str = str.toLowerCase();
    str = str.split(' ').join('');

    frequencyMap = populateFrequencyMap(str, frequencyMap);

    for (let key of Object.keys(frequencyMap)) {
        if (frequencyMap[key] % 2 !== 0) {
            oddCharacterOccurences++;
        }
        if (oddCharacterOccurences > 1) {
            return false;
        }
    }
    return true;
};

//isPalindromePermutation
console.log('isPalindromePermutation');
console.log(isPalindromePermutation('Tact Coa'));
console.log(isPalindromePermutation('Tact Cooa'));