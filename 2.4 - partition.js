/* 2.4 - partition
Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */
let LinkedList = require('./2-LinkedList');


 function partition(head, pivotValue) {
     let partitionedList = new LinkedList();
     let current = head;

     while (current != null) {
        if (current.data < pivotValue) {
            partitionedList.addBefore(current.data);
        }
        else {
            partitionedList.addAfter(current.data);
        }
        current = current.next;
     }

     partitionedList.retrieve();

 }

 let testObj = new LinkedList();
testObj.add(3);
testObj.add(5);
testObj.add(8);
testObj.add(5);
testObj.add(10);
testObj.add(2);
testObj.add(1);

console.log('---1----');
testObj.retrieve();

console.log('---2----');
partition(testObj.getReference(), 5);