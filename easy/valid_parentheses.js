// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        }
        if (s[i] === "}") {
            if (stack.pop() === "{") {

            } else {
                return false
            }
        }
        if (s[i] === "]") {
            if (stack.pop() === "[") {

            } else {
                return false
            }
        }
        if (s[i] === ")") {
            if (stack.pop() === "(") {

            } else {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
};


// method2


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let stringArray = s.split('')
    
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === ')' && stack[stack.length-1] === '(' ||
            stringArray[i] === '}' && stack[stack.length-1] === '{' ||
            stringArray[i] === ']' && stack[stack.length-1] === '[') {
            stack.pop()
        }
        else {
            stack.push(stringArray[i])
        }
    }
    return stack.length? false : true;
};

// method3

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length <=1) {
        return false
    }
    let stack = []
    let hash = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let i = 0; i < s.length; i++){
        if (hash[s[i]]){
            stack.push(hash[s[i]])
        }
        else if (s[i] !== stack.pop()){
            return false
        }
    }
    return !stack.length
};