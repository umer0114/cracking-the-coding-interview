/* Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? */

// import LinkedList from "./2-LinkedList";
let LinkedList = require('./2-LinkedList');

function removeDuplicates(head) {
    let current = head;
    let nodesBuffer = {};
    nodesBuffer[current.data] = true;

    while (current.next != null) {
        if (nodesBuffer[current.next.data]) {
            current.next = current.next.next;
        }
        else {
            nodesBuffer[current.next.data] = true;
            current = current.next;
        }
    }
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

removeDuplicates(testObj.getReference());

console.log('---2----');
testObj.retrieve();
