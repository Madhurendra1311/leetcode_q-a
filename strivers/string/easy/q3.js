// Largest Odd Number in String

// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number

// Approach

// Explanation:
// Iterating from Right to Left:

// Start from the last character of the string and move towards the first character.
// Checking for Odd Digit:

// For each character, check if it represents an odd digit by using the condition parseInt(num[i]) % 2 !== 0.
// Returning the Substring:

// As soon as an odd digit is found, return the substring from the beginning of the string up to and including this digit using slice(0, i + 1).
// Handling the Case with No Odd Digits:

// If no odd digit is found during the traversal, return an empty string.

function largestOddNumber(num) {
    // Traverse the string from right to left
    for (let i = num.length - 1; i >= 0; i--) {
        // Check if the current digit is odd
        if (parseInt(num[i]) % 2 !== 0) {
            // Return the substring from the start to the current position
            return num.slice(0, i + 1);
        }
    }
    // If no odd digit is found, return an empty string
    return '';
}

// Test case
let num = "52";
let result = largestOddNumber(num);
console.log(result); // Output: "5"