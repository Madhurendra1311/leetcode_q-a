
function maxDepth(s) {
    let maxDepth = 0;
    let currentDepth = 0;

    for (let char of s) {
        if (char === '(') {
            currentDepth++;
            // maxDepth = Math.max(maxDepth, currentDepth);
        } else if (char === ')') {
            currentDepth--;
        }
        maxDepth = Math.max(maxDepth, currentDepth);
    }

    return maxDepth;
}

// Example
let s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s)); // Output: 3