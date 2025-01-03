/**
 * Basic implementation of Stack in Javascript 
 * Stack is a DataStructure which follows LIFO. 
 * Since Memory allocation is not an issue in JavaScript, this
 * is a straight forward implementation with existing library methods like push
 * and pop.
 * 
 * Thread safety is not being considered here. 
 * 
 */
class Stack {

    constructor() {
        this.elements = [];
    }

    /**
     * Adding the element in the stack as the last 
     * element in the this.elements array
     * @param {*} ele 
     */
    pushElement(ele)  {
        this.elements.push(ele);
    }

    /**
     * 
     * @returns the last element this.elements array
     */
    popElement () {
        if (this.isEmpty()) {
            throw Error("Stack is empty");
        }
        return this.elements.pop();
    }

    /**
     * 
     * @returns Checks if there any elements in the stack
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * 
     * @returns the last element in the array without deleting it. 
     */
    peek() {
        // If empty throw an error
        if (this.isEmpty()) {
            throw Error("Stack is empty");
        }
        return this.elements[this.elements.length - 1];
    }

    /**
     * Prints this.elements from last to first with each line showing one element
     */
    printStack() {
        for (let i = this.elements.length - 1; i >= 0; i--) {
            console.log(this.elements[i]);
        }
    }

}


let s = new Stack()
s.pushElement(2)
s.pushElement(3)

s.printStack()
console.log(s.peek())
s.pushElement(10)
console.log(s.peek())
s.popElement()
s.popElement()

s.printStack()
s.popElement()

// Causes an error as the stack is empty
s.popElement()

