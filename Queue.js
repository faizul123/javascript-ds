class Queue {
    constructor(){
        this.collection = [];

        this.enQ = (val) => {
            this.collection.push(val);
        }

        this.deQ = () => {
            return this.collection.shift();
        }

        this.size = () => {
            return this.collection.length;
        }

        this.front = () => {
            return this.collection[0];
        }

        this.print = () => {
            this.collection.forEach(function(e){
                console.log(e);
            });
        }
    }
}

// const myQ = new Queue();

// myQ.enQ(7);
// myQ.enQ(9);
// myQ.enQ(8);
// myQ.print();
// console.log(myQ.front());

export default Queue;