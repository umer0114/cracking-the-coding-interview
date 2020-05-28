/* recursiveMultiply
Recursive Multiply: Write a recursive function to multiply two positive integers without using the
* operator. You can use addition, subtraction, and bit shifting, but you should minimize the number
of those operations.
 */

 function recursiveMultiply(n1, n2, index) {
    if (index === Math.floor(n2/2)) {
        return 0;
    }
    let result = n1 + recursiveMultiply(n1, n2, index + 1);

    if (index === 0) {
        if (n2 % 2 === 0) {
            return result << 1;
        }
        return (result << 1) + n1;
    }
    return result;
 }

 console.log(recursiveMultiply(9, 5, 0));