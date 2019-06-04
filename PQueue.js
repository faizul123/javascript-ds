"use strict";

class PQueue {


    constructor(){
        this.collection = [];

        
    }

    enQ(val) {
        if(this.collection.length === 0){
            this.collection.push(val);
        }
        else{
            let added = false;
            for(let i=0;i<this.collection.length;i++){
                if(val[1] < this.collection[i][1]){
                    this.collection.splice(i,0,val);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.collection.push(val);
            }
        }
    }

    deQ() {
        return this.collection.shift();
    }

    size() {
        return this.collection.length;
    }

    front() {
        return this.collection[0];
    }

    print() {
        this.collection.forEach(function(e){
            console.log(e);
        });
    }

}

const myq = new PQueue();

myq.enQ([22,5]);
myq.enQ([33,3]);
myq.enQ([43,1]);

myq.print();



module.exports.PQueue = PQueue;