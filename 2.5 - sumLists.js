/* 2.5 
Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-) 1 -) 6) + (5 -) 9 -) 2) .Thatis,617 + 295.
Output: 2 -) 1 -) 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
EXAMPLE
Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).Thatis,617 + 295.
Output: 9 -) 1 -) 2. That is, 912. */

let LinkedList = require('./2-LinkedList');


function sumLists(head1, head2) {
    let current1 = head1;
    let current2 = head2;
    let carry = 0;
    let resultList = new LinkedList();

    while (current1 != null || current2 != null) {
        if (current1 != null && current2 != null) {
            let sum = carry + current1.data + current2.data;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            resultList.addBefore(sum);
            current1 = current1.next;
            current2 = current2.next;
        }
        else {
            let data = current1 ? current1.data : current2.data;
            let sum = carry + data;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            resultList.addBefore(sum);
            current1 && (current1 = current1.next);
            current2 && (current2 = current2.next);
        }
    }

    return resultList;
}

//test cases
let list1 = new LinkedList();
let list2 = new LinkedList();

list1.add(7);
list1.add(1);
list1.add(6);

list2.add(5);
list2.add(9);
list2.add(2);

list1.retrieve();
list2.retrieve();

console.log('Output');
sumLists(list1.getReference(), list2.getReference()).retrieve();