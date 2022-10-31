// Implement Stack from Scratch

//Stack Class 

class Stack {
    // Array is used to implement stack
    constructor() {
        this.items = []
    }
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()

    // 1) Push: Adds an element to the stack
    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }
    // 2) Pop() : Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow”
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if(this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    // 3) Peek() : returns the top most elements in the stack, but doesn’t delete it.
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // Return the topmost element without removing it from the stack.

    // isEmpty() : return true if the stack is empty
    // isEmpty function
    isEmpty()
    {
        // return true if stack is empty
        return this.items.length == 0;
    }

    // printStack() : This method returns a string in which all the element of an stack is concatenated.
    // printStack function
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}


// creating object for stack class
var stack = new Stack();
  
// testing isEmpty and pop on an empty stack
  
// returns false
console.log(stack.isEmpty()); 
  
// returns Underflow
console.log(stack.pop());

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);
  
// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());
  
// returns 30
console.log(stack.peek());
  
// returns 30 and remove it from stack
console.log(stack.pop());
  
// returns [10, 20]
console.log(stack.printStack());