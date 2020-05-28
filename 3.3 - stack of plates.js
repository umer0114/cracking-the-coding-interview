/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
(that is, pop ( ) should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt (int index) which performs a pop operation on a specific sub-stack. */

let Stack = require('./3 - stack');

class SetOfStacks {
    constructor(threshold) {
        this.threshold = threshold;
        this.currentStack = 0;
        this.size = 0;
        this.setOfStacks = {};
    }

    push(data) {
        if (this.size && this.size % this.threshold === 0) {
            this.currentStack++;
            console.log('Stack added: ' + this.currentStack);
        }
        console.log(data + ' pushed')
        if (!this.setOfStacks[this.currentStack]) {
            this.setOfStacks[this.currentStack] = new Stack();
        }
        this.setOfStacks[this.currentStack].push(data);
        this.size++;
    }

    pop() {
        if (this.size && this.size % this.threshold === 0) {
            this.setOfStacks[this.currentStack] = null;
            console.log('Stack removed: ' + this.currentStack);
            this.currentStack--;
        }
        this.size--;
        return this.setOfStacks[this.currentStack].pop();
    }
}

let testStack = new SetOfStacks(3);
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
testStack.push(6);
testStack.push(7);

console.log(testStack.pop() + ' Popped');
console.log(testStack.pop() + ' Popped');
console.log(testStack.pop() + ' Popped');
console.log(testStack.pop() + ' Popped');
console.log(testStack.pop() + ' Popped');
console.log(testStack.pop() + ' Popped');





