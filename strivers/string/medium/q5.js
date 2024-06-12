// Count number of substrings

// Given a string of lowercase alphabets, count all possible 
// substrings (not necessarily distinct) that have exactly k distinct characters. 

// Example 1:

// Input:
// S = "aba", K = 2
// Output:
// 3
// Explanation:
// The substrings are: "ab", "ba" and "aba".
// Example 2:

// Input: 
// S = "abaaca", K = 1
// Output:
// 7
// Explanation:
// The substrings are: "a", "b", "a", "aa", "a", "c", "a".

// Approach:
// You can achieve this by considering every possible substring of
//  the given string and counting the number of distinct characters in each substring

// Double Loop:

// We use two nested loops to iterate through every possible substring of the given string S.
// The outer loop iterates over the starting index of the substring (i).
// The inner loop iterates over the ending index of the substring (j).
// Counting Distinct Characters:

// For each substring, we maintain a frequency map freq to count the occurrences of distinct characters.
// As we iterate through the substring, we add each character to the frequency map.
// If the number of keys (distinct characters) in the frequency map becomes equal to K, we increment the count variable.

// Return Count:

// After processing all substrings, we return the total count of substrings with exactly K distinct characters.
// Example Execution:
// For the string "aba" and K = 2:

// We consider every possible substring:
// "a", "ab", "aba", "b", "ba", "a".
// Among these substrings, the ones with exactly 2 distinct characters are: "ab", "ba", and "aba".
// Therefore, the output is 3.

function countSubstrings(S, K) {
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let freq = {};
        for (let j = i; j < S.length; j++) {
            let char = S[j];
            if (!freq[char]) {
                freq[char] = true;
                if (Object.keys(freq).length === K) {
                    count++;
                }
            }
        }
    }

    return count;
}

// Example
let S = "aba";
let K = 2;
console.log(countSubstrings(S, K)); // Output: 3


// Approach 2:


// Certainly! We can simplify the process by directly counting the number of substrings with exactly K distinct characters. Here's a straightforward approach:

// Explanation:
// Iteration through Substrings:

// We iterate through all possible substrings of the given string S.
// The outer loop (i) determines the starting index of the substring, and the inner loop (j) determines the ending index.
// Counting Distinct Characters:

// For each substring, we maintain a set distinctChars to keep track of the distinct characters encountered so far.
// As we iterate through the substring, we add each character to the set.
// If the size of the set becomes equal to K, it means the substring has exactly K distinct characters, so we increment the count.
// Return Count:

// After processing all substrings, we return the total count of substrings with exactly K distinct characters.
// Example Execution:
// For the string "aba" and K = 2:

// We consider every possible substring:
// "a", "ab", "aba", "b", "ba", "a".
// Among these substrings, the ones with exactly 2 distinct characters are: "ab", "ba", and "aba".
// Therefore, the output is 3.


function countSubstrings(S, K) {
    let count = 0;

    // Iterate through all substrings
    for (let i = 0; i < S.length; i++) {
        let distinctChars = new Set();
        for (let j = i; j < S.length; j++) {
            // Include the character at index j
            distinctChars.add(S[j]);
            // Check if the number of distinct characters equals K
            if (distinctChars.size === K) {
                count++;
            }
        }
    }

    return count;
}

Example
let S1 = "aba";
let K1 = 2;
console.log(countSubstrings(S1, K1)); // Output: 3






