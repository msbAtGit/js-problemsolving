
/**
 * Basic implementation of Queue data structure on Javascript with build in methods in an array
*/
class Queue {
    
    constructor () {
        this.elements = [];
    }

    /**
     * Element is added at the end of an array
     * @param {} element 
     */
    enQueue(element) {
        this.elements.push(element);
    }

    /**
     * 
     * @returns the first element in the array 
     * after remove it using shift method
     */

    deQueue() {

        // Check if the queue is empty before 
        // trying to delete any elements from it
        if(this.isEmpty()) {
            throw Error("Queue is empty");
        }
        return this.elements.shift();
    }

    /**
     * If this.elements has no elements in it then its considered empty
     * @returns 
     */
    isEmpty() {
        return (this.elements.length === 0);
    }

    /**
     * 
     * @returns the first element in the Queue without deleting it.
     */
    peek() {
        if (this.isEmpty()) {
            throw Error("Queue is empty");
        }
        return this.elements[0];
    }
    /**
     * Prints the elements in the queue from first to last in a single line.
     */
    printQueue() {
        
        let outputStr = "";
        for(let i = 0; !this.isEmpty() && i < this.elements.length; i++) {
            outputStr += this.elements[i] + " ";

        }
        console.log(outputStr.trim());
    }   

}

let queue = new Queue();
queue.enQueue(9)
queue.enQueue(3)
queue.enQueue(4)

queue.printQueue();
queue.deQueue();
queue.printQueue()