/* 3.2 - stack min
Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time. */

let Stack = require('./3 - stack');

class StackMin extends Stack {
    constructor() {
        super();
        this.minStack = new Stack();
    }

    getMin() {
        console.log('min: ' + this.min);
        return this.min;
    }

    peek() {
        return this.head.data;
    }

    push(data) {
        if (data < this.min || this.minStack.isEmpty()) {
            this.min = data;
            this.minStack.push(data);
        }
        super.push(data);
    }

    pop() {
        let data = super.pop();
        if (!this.minStack.isEmpty() && this.minStack.peek() === data) {
            this.min = this.minStack.pop();
        }
    }
}

let testObj = new StackMin();
testObj.push(-1);
testObj.push(4);
testObj.push(-3);
testObj.push(0);
testObj.push(-5);

testObj.getMin();


testObj.pop();
testObj.getMin();

testObj.pop();
testObj.getMin();

testObj.pop();
testObj.getMin();

testObj.pop();
testObj.getMin();

testObj.pop();
testObj.getMin();
