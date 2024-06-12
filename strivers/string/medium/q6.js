
// Approach:
// To find the longest palindromic substring
// in a given string s, we can utilize the expand around center approach. 
// This approach involves iterating over each character in the string and expanding outwards from that 
// character to check for palindromes.

// Expand Around Center Function:

// We define a helper function expandAroundCenter that takes a string s and two indices left and right as input.
// This function expands outwards from the given indices to check if the substring is a palindrome.
// It returns the length of the palindrome centered at the given indices.
// Main Function longestPalindrome:

// We initialize start and end indices to keep track of the longest palindromic substring found so far.
// We iterate over each character in the string s.
// For each character, we expand around its center to check for both odd-length and even-length palindromes.
// We update start and end indices if we find a longer palindromic substring.
// Return Result:

// Finally, we return the substring of s from index start to index end (inclusive), which represents the longest palindromic substring.
// Example Execution:
// For the string "babad":
// We find "bab" and "aba" as the longest palindromic substrings.
// Therefore, the output can be either "bab" or "aba".
// For the string "cbbd":
// We find "bb" as the longest palindromic substring.
// Therefore, the output is "bb".

function longestPalindrome(s) {
    if (s.length === 0) return '';

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // for odd-length palindromes like "aba"
        let len2 = expandAroundCenter(s, i, i + 1); // for even-length palindromes like "abba"
        let maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Example 1
let s1 = "babad";
console.log(longestPalindrome(s1)); // Output: "bab" or "aba"

// Example 2
let s2 = "cbbd";
console.log(longestPalindrome(s2)); // Output: "bb"
