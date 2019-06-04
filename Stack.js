class Stack {
    constructor() {
        this.storage = [];
        this.count = 0;
        this.push = (value) => {
            this.storage[this.count] = value;
            this.count++;
        };
        this.pop = () => {
            if (this.count == 0) {
                return undefined;
            }
            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };
        this.peek = () => {
            if (this.count === 0) {
                return undefined;
            }
            return this.storage[this.count - 1];
        };
        this.size = () => {
            return this.count;
        };
    }
}

var mystack = new Stack();

mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
console.log(mystack.size());