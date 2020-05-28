/* A basic LinkedList structure to solve problems in chapter 2 */

class LinkedListNode {

    constructor (data) {
        this.data = data;
        this.next = null;
    }
};

class LinkedList {

    constructor (head) {
        this.head = head || null;
        this.tail = null;
        this.length = 0;
    }

    getReference() {
        return this.head;
    }

    isEmpty() {
        return !this.head;
    }

    add(data) {
        const newNode = new LinkedListNode(data);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
        this.tail = current.next;
    }

    getLength() {
        return this.length;
    }

    addBefore(data) {
        if (this.head === null) {
            this.head = new LinkedListNode(data);
            this.tail = this.head;
        }
        else {
            let newNode = new LinkedListNode(data);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    addAfter(data) {
        if (this.head === null) {
            this.head = new LinkedListNode(data);
            this.tail = this.head;
            return;
        }
        this.tail.next = new LinkedListNode(data);
        this.tail = this.tail.next;
        this.length++;
    }

    retrieve() {
        console.log('Populated List: ');
        let current = this.head;
        let output = '';

        while (current != null) {
            output += current.data + ' -> ';
            current = current.next;
        }
        console.log(output.substring(0, output.length - 4));
    }

    getByIndex(index) {
        let current = this.head;

        while (current != null && index > 0) {
            current = current.next;
            index --;
        }

        if (index === 0) {
            return current;
        }
        return null;
    }

    remove(data) {
        this.length--;
        if (this.head && this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
            }
            else {
                current = current.next;
            }
        }
    }

    removeFromStart() {
        if (this.head) {
            this.head = this.head.next;
            this.tail = this.head;
            return this.head.data;
        }
        else {
            console.log('List already empty');
        }
    }

    equals(head) {
        let list1Head = this.head;
        let list2Head = head;

        while (list1Head != null && list2Head != null) {
            if (list1Head.data !== list2Head.data) {
                return false;
            }
            list1Head = list1Head.next;
            list2Head = list2Head.next;
        }
        if (list1Head === null && list2Head === null) {
            return true;
        }
        return false;
    }

    static reverse(head) {
        let prev = null;
        let current = head;
        let next = current.next;

        while (next != null) {
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
        }
        current.next = prev;
        return current;
    }

    static reverse(head, next) {
        if (next.next === null) {
            return next;
        }
        let current = reverse(head.next, next.next);

        current.next = head;

        return head;

    }
}

module.exports = LinkedList;