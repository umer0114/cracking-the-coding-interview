/* 2.7 - intersection
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting. */

let LinkedList = require('./2-LinkedList');

function getLength(head) {
    let current = head;
    let count = 0;

    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}

function findIntersection(head1, head2) {
    let length1 = getLength(head1);
    let length2 = getLength(head2);
    let currentShort;
    let currentLong;

    let difference = length1 - length2;

    console.log(difference);

    if (difference < 0) {
        currentShort = head1;
        currentLong = head2;
        difference*=-1;
    }
    else {
        currentShort = head2;
        currentLong = head1;
    }

    while(currentLong != null && difference > 0) {
        currentLong = currentLong.next;
        difference --;
    }

    console.log(currentLong);

    while (currentShort != null && currentLong != null) {
        if (currentShort === currentLong) {
            return currentShort;
        }
        currentLong = currentLong.next;
        currentShort = currentShort.next;
    }
    return null;
}

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.add(7);
list1.add(1);
list1.add(6);
list1.add(7);
list1.add(1);
list1.add(6);
list1.retrieve();

list2.add(5);
list2.add(9);
list2.add(2);
list2.retrieve();

console.log(findIntersection(list1.getReference(), list2.getReference()));
