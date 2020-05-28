/* Power Set: Write a method to return all subsets of a set.
 */

 function powerSetIterative(set) {
    let subSetsBuffer;
    let subSets = [[]];
    let index = 0;

    while (index < set.length) {
        subSetsBuffer = JSON.parse(JSON.stringify(subSets));
        subSetsBuffer.forEach(subset => subset.push(set[index]));
        subSets = subSets.concat(subSetsBuffer);
        index++;
    }
    return subSets;
 }

 function powerSetRecursive(set, index) {
     let subsets;
     let subsetsBuffer
    if (index < 0) {
        return  [[]];
    }
    subsets = powerSetRecursive(set, index - 1, subsets);
    subsetsBuffer = JSON.parse(JSON.stringify(subsets));
    subsetsBuffer.forEach(subset => subset.push(set[index]));
    subsets = subsets.concat(subsetsBuffer);
    return subsets;
 }

 let testArr = ['a', 'b', 'c'];

let subsetsIterative = powerSetIterative(testArr);
let subsetsRecursive = powerSetRecursive(testArr, testArr.length - 1);



console.log(subsetsIterative);
console.log(subsetsRecursive);

