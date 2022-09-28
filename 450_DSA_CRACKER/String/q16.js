// Count the Reversals

// link: https://practice.geeksforgeeks.org/problems/count-the-reversals0401/1

const countMinReversals = (expr) => {
    let len = expr.length;
    // length of expression must be even to make
    // it balanced by using reversals.
    if (len % 2) {
        return -1;
    }
    // To store number of reversals required.
    var ans = 0;
    var i;
    // To store number of unbalanced opening brackets.
    var open = 0;
    // To store number of unbalanced closing brackets.
    var close = 0;
    for (i = 0; i < len; i++) {
 
        // If current bracket is open then increment
        // open count.
        if (expr[i] == '{')
            open++;
 
        // If current bracket is close, check if it
        // balances opening bracket. If yes then
        // decrement count of unbalanced opening
        // bracket else increment count of
        // closing bracket.
        else {
            if (!open)
                close++;
            else
                open--;
        }
    }
    ans = Math.ceil(close / 2) + Math.ceil(open / 2);

    return ans;
}

let res = countMinReversals("}{")
console.log(res);

// output = 2
// We need to change '}' to '{' and '{' to
// '}' so that the expression becomes balanced, 
// the balanced expression is '{}'