// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    const sSorted = s.split("").sort().join("");
    const tSorted = t.split("").sort().join("");
    return sSorted === tSorted;
};

// Approach 2:
// Another method to determine if two strings are anagrams of each other is by using a character frequency map.
//  You can count the frequency of each character in both strings and compare the counts. If the frequency counts
//   for each character are the same in both strings, then the strings are anagrams.

// Initial Check:

// Check if the lengths of s and t are equal. If not, they cannot be anagrams, so return false.
// Create Frequency Maps:

// Create frequency maps (mapS and mapT) to count the frequencies of characters in both strings.
// Use objects to store the character frequencies, where the keys are characters and the values are their respective frequencies.
// Count Frequencies:

// Iterate through each character of s and t, and update the frequency counts in their respective maps.
// Compare Frequency Maps:

// Iterate through the keys (characters) in mapS.
// For each character, compare its frequency count in mapS with its frequency count in mapT.
// If any frequency count differs between the two maps, return false.
// If all frequency counts are the same, return true.
// Example Execution:
// For s = "anagram" and t = "nagaram":

// Count the frequency of each character in both strings:
// mapS = { 'a': 3, 'n': 1, 'g': 1, 'r': 1, 'm': 1 }
// mapT = { 'n': 1, 'a': 3, 'g': 1, 'r': 1, 'm': 1 }
// The frequency maps are the same, so the output is true.
// For s = "rat" and t = "car":

// Count the frequency of each character in both strings:
// mapS = { 'r': 1, 'a': 1, 't': 1 }
// mapT = { 'c': 1, 'a': 1, 'r': 1 }
// The frequency maps are different, so the output is false.
// This method efficiently determines if two strings are anagrams by counting the frequencies of characters and comparing the counts.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    // Create frequency maps for both strings
    let mapS = {};
    let mapT = {};

    // Count frequencies of characters in string s
    for (let char of s) {
        mapS[char] = (mapS[char] || 0) + 1;
    }

    // Count frequencies of characters in string t
    for (let char of t) {
        mapT[char] = (mapT[char] || 0) + 1;
    }

    // Compare frequency maps
    for (let char in mapS) {
        if (mapS[char] !== mapT[char]) {
            return false;
        }
    }

    return true;
}

// Example 1
let s1 = "anagram";
let t1 = "nagaram";
console.log(isAnagram(s1, t1)); // Output: true

// Example 2
let s2 = "rat";
let t2 = "car";
console.log(isAnagram(s2, t2)); // Output: false
