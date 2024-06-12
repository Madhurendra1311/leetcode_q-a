// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

function rotateString(s, goal) {
    if (s.length !== goal.length) return false;

    // Concatenate s with itself to handle circular shifts
    let concatenated = s + s;

    // Check if goal is a substring of the concatenated string
    return concatenated.includes(goal);
}

// Example 1
let s1 = "abcde";
let goal1 = "cdeab";
console.log(rotateString(s1, goal1)); // Output: true