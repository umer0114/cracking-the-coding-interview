/* 3.1 - ThreeInOne
Three in One: Describe how you could use a single array to implement three stacks. */

class stackInArray {

    constructor(size) {
        this.current = {
            'stack1': 0,
            'stack2': 1,
            'stack3': 2
        }
        this.size = size;
        this.stack = new Array(size);
    }

    push(value, stack) {
        if (this.current[stack] === this.size - 1) {
            throw (stack + ' already full');
        }
        this.stack[this.current[stack]] = value;
        this.current[stack] = this.current[stack] + 3
        console.log('PUSH - ' + stack + ' : ' + value);
    }

    pop(stack) {
        if (this.current[stack] === -1) {
            throw(stack + ' already empty');
        }
        let value = this.stack[this.current[stack]];
        this.stack[this.current[stack]] = void 0;
        this.current[stack] = this.current[stack] - 3;
        console.log('POP - ' + stack + ' : ' + value);
        return value;
    }

    retrieve(stack) {
        let current;
        let output = '';
        stack === 'stack1' && (current = 0);
        stack === 'stack2' && (current = 1);
        stack === 'stack3' && (current = 2);

        for (let i = current; i < this.size; i+=3) {
            this.stack[i] && (output += this.stack[i] + ' ');
        }
        console.log(stack + ': ' + output);
        return output;
    }
    
}

let testStack = new stackInArray(100);

testStack.push(1, 'stack1');
testStack.push(2, 'stack2');
testStack.push(3, 'stack3');

testStack.push(4, 'stack1');
testStack.push(5, 'stack2');
testStack.push(6, 'stack3');

testStack.push(7, 'stack1');
testStack.push(8, 'stack2');
testStack.push(9, 'stack3');

testStack.push(10, 'stack1');
testStack.push(11, 'stack2');
testStack.push(12, 'stack3');

testStack.push(13, 'stack1');
testStack.push(14, 'stack2');
testStack.push(15, 'stack3');

testStack.push(16, 'stack1');
testStack.push(17, 'stack2');
testStack.push(18, 'stack3');

testStack.push(19, 'stack1');
testStack.push(20, 'stack2');
testStack.push(21, 'stack3');

testStack.push(22, 'stack1');
testStack.push(23, 'stack2');
testStack.push(24, 'stack3');

testStack.retrieve('stack1');
testStack.retrieve('stack2');
testStack.retrieve('stack3');

testStack.pop('stack1');
testStack.pop('stack2');
testStack.pop('stack3');

testStack.pop('stack1');
testStack.pop('stack2');
testStack.pop('stack3');

testStack.pop('stack1');
testStack.pop('stack2');
testStack.pop('stack3');

testStack.pop('stack1');
testStack.pop('stack2');
testStack.pop('stack3');

testStack.pop('stack1');
testStack.pop('stack2');
testStack.pop('stack3');

testStack.retrieve('stack1');
testStack.retrieve('stack2');
testStack.retrieve('stack3');
