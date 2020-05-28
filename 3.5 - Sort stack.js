/* 3.5 - Sort stack
Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and isEmpty. */

/*
4
9
7
8
*/

let Stack = require('./3 - stack');

class sortStack {
    constructor() {
        this.primaryStack = new Stack();
        this.secondaryStack = new Stack();
    }

    push(data) {
        this.primaryStack.push(data)
    }

    sort() {
        while(!this.primaryStack.isEmpty()) {
            let value = this.primaryStack.pop();

            while(!this.secondaryStack.isEmpty() && this.secondaryStack.peek() > value) {
                this.primaryStack.push(this.secondaryStack.pop());
            }
            this.secondaryStack.push(value);
        }

        while(!this.secondaryStack.isEmpty()) {
            console.log(this.secondaryStack.pop());
        }
    }
}

let testObj = new sortStack();
testObj.push(4);
testObj.push(9);
testObj.push(2);
testObj.push(10);
testObj.push(1);

testObj.sort();