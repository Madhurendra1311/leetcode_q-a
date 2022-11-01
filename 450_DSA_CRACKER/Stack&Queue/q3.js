// Function to check if brackets are balanced
const areBracketsBalanced = (expr) => {
     
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
 
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++) {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{') {  
            // Push the element in the stack
            stack.push(x);
            continue;
        }
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0) {
            return false;
        }

        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[') {
                return false;
            }
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[') {
                return false;
            }
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{') {
                return false;
            }
            break;
        }
    }
 
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr)) {
    console.log("Balanced ");
} else {
    console.log("Not Balanced ");
}


const checkParanthesis = (s) => {
    if(typeof s !== "string" || s.length % 2 !== 0) {
        return false;
    }
    let i = 0;
    let arr = [];
    while(i<s.length) {
        if(s[i]=== "{" || s[i]=== "(" || s[i]=== "[") {
           arr.push(s[i]);
        } else if(s[i] === "}" && arr[arr.length-1] === "{") {
            arr.pop()
        } else if(s[i] === ")" && arr[arr.length-1] === "(") {
            arr.pop()
        } else if(s[i] === "]" && arr[arr.length-1] === "[") {
            arr.pop()
        } else {
            return false;
        }
        i++
    }
    return arr.length === 0;
};
let str = "{([])}";
console.log(checkParanthesis(str));