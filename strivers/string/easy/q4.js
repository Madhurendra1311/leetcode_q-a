
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    let res = ''; // Initialize the result as an empty string
    let first = strs[0]; // Take the first string in the array as a reference

    // Loop through each character of the first string
    for (let i = 0; i < first.length; i++) {
        // Loop through the other strings in the array starting from the second one
        for (let j = 1; j < strs.length; j++) {
            // Check if the current character of the current string does not match the current character of the first string
            if (strs[j][i] !== first[i]) {
                // If they don't match, return the result so far
                return res;
            }
        }
        // If all characters at the current position match, add the character to the result
        res += first[i];
    }

    // If the loop completes, return the final result
    return res;
};
