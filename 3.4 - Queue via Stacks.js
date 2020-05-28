/* 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks. */

let Stack = require('./3 - stack');



class QueueViaStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(data) {
        if (!this.stack2.isEmpty()) {
            while (!this.stack2.isEmpty()) {
                this.stack1.push(this.stack2.pop());
            }
        }
        this.stack1.push(data);
    }

    dequeue(data) {
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            return -1;
        }
        if (!this.stack2.isEmpty()) {
            return this.stack2.pop();
        }
        else {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
}

let testObj = new QueueViaStacks();

testObj.enqueue(1);
testObj.enqueue(2);
testObj.enqueue(3);
testObj.enqueue(4);


console.log(testObj.dequeue());
console.log(testObj.dequeue());
testObj.enqueue(5);

console.log(testObj.dequeue());

console.log(testObj.dequeue());
testObj.enqueue(6);
console.log(testObj.dequeue());
console.log(testObj.dequeue());

