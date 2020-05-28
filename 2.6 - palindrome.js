/* 2.6 Palindrome: Implement a function to check if a linked list is a palindrome. */

let LinkedList = require('./2-LinkedList');

function isPalindrome (head) {
    let reversedList = new LinkedList(LinkedList.reverse(head));
    return reversedList.equals(head);
}


//test cases
let testObj = new LinkedList();
testObj.add(5);
testObj.add(4);
testObj.add(5);
testObj.retrieve();
console.log('length: ' + testObj.getLength());

console.log('IsPalindrome: ' + isPalindrome(testObj.getReference()));
