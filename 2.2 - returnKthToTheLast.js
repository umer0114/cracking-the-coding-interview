/* 2.2 - returnKthToTheLast
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. */

// 5 -> 4 -> 5 -> 5 -> 3 -> 6 -> 8 -> 5 -> 8

let LinkedList = require('./2-LinkedList');


function returnKthToTheLast(head, k) {
    let current = head;
    let runner = current;

    while (runner != null && k > 0) {
        runner = runner.next;
        k--;
    }

    while (runner != null) {
        runner = runner.next;
        current = current.next;
    }

    return current.data;
}

let testObj = new LinkedList();
testObj.add(5);
testObj.add(4);
testObj.add(5);
testObj.add(5);
testObj.add(3);
testObj.add(6);
testObj.add(8);
testObj.add(5);
testObj.add(8);

console.log('---1----');
testObj.retrieve();

console.log(returnKthToTheLast(testObj.getReference(), 4));
