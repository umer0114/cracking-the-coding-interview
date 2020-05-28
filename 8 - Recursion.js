
function countNumber(number) {
    if (number === 0) {
        return 0;
    }

    let count =  2 + countNumber(number - 1);

    return count;
}

console.log(countNumber(10));