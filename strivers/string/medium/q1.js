// Sort Characters By Frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Approach:
// by counting the frequency of each character in the string 
// and then sorting the characters based on their frequencies in decreasing order.

// Explanation:
// Counting Frequencies:

// Create a frequency map (frequencyMap) to count the frequency of each character in the string s.
// Iterate through each character of s and update the frequency count in the map.
// Sorting Characters:

// Get the keys (characters) of the frequencyMap using Object.keys().
// Sort the characters based on their frequencies in decreasing order using sort() and a custom comparator function.
// Building the Sorted String:

// Iterate through the sorted characters.
// For each character, repeat it the number of times equal to its frequency and append it to the sortedString.
// Return the Sorted String:

// Return the sortedString, which contains characters sorted based on their frequencies in decreasing order.
// Example Execution:
// For s = "tree":

// Count the frequency of each character:
// 't': 1
// 'r': 1
// 'e': 2
// Sort the characters based on their frequencies: ['e', 't', 'r']
// Build the sorted string by repeating each character according to its frequency: "eetr" or "eert"
// For s = "cccaaa":

// Count the frequency of each character:
// 'c': 3
// 'a': 3
// Sort the characters based on their frequencies: ['c', 'a']
// Build the sorted string by repeating each character according to its frequency: "aaaccc" or "cccaaa"
// This approach efficiently sorts the characters of the string based on their frequencies in decreasing order.

function frequencySort(s) {
    // Count the frequency of each character
    const frequencyMap = {};
    for (let char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Sort characters based on their frequencies in decreasing order
    const sortedChars = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    // Build the sorted string
    let sortedString = '';
    for (let char of sortedChars) {
        sortedString += char.repeat(frequencyMap[char]);
    }

    return sortedString;
}

// Example 1
let s1 = "tree";
console.log(frequencySort(s1)); // Output: "eetr" or "eert"

// Example 2
let s2 = "cccaaa";
console.log(frequencySort(s2)); // Output: "aaaccc" or "cccaaa"