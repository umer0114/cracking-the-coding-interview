/* Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node.
    EXAMPLE
    Input: the node c from the linked list a - >b- >c - >d - >e- >f
    Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f */

let LinkedList = require('./2-LinkedList');


function deleteMiddleNode(currentNode) {
    currentNode.data = currentNode.next.data;
    currentNode.next = currentNode.next.next;
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

deleteMiddleNode(testObj.getByIndex(4));

console.log('---2----');
testObj.retrieve();
