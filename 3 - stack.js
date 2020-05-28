class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    peek() {
        return this.head.data;
    }

    push(data) {
        if (this.head === null) {
            this.head = new StackNode(data)
            this.tail = this.head;
        }
        else {
            let current = new StackNode(data);
            current.next = this.head;
            this.head = current;
        }
    }

    pop() {
        if (this.head === null) {
            throw('Stack already empty');
        }
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }
}

module.exports = Stack;