// Parenthesis Checker
// link: https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1

// Approach:

// As I iterate through the string character by character, I check to see if any of its characters is an open or closing parenthesis.

// If a character is an opening parentheses, I will push it onto the stack.

// Opening parenthesis: {, [, (

// If a character is a closing parentheses, I’ll pop the element on top of the stack and check if it matches the character in the current index. If the characters do not match, then the expression is invalid.

// Closing parenthesis: }, ], )

// Essentially, if there are still elements in the stack, then the expression is invalid.


var isValid = function(s){
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        let curChar = s[i];
        switch(curChar) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default: 
                let topElement = stack.pop()
                if(curChar !== topElement) {
                    return false;
                }
        }
    }
    return stack.length === 0
}

let res = isValid('{([])}')
console.log(res);