// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Approach:

// To convert a Roman numeral to an integer, you can iterate through the string from left to right. If the current character represents a smaller value than the next character, it means the current character should be subtracted from the next character. 
// Otherwise, you simply add the value of the current character

// Roman to Integer Mapping:

// Create a mapping romanToIntMap from Roman numerals to integers.
// Iterating Through the String:

// Iterate through each character of the Roman numeral string s.
// If the current character represents a smaller value than the next character:
// Subtract the value of the current character from the result.
// Otherwise:
// Add the value of the current character to the result.
// Return the Result:

// After iterating through the entire string, return the final result.


function romanToInt(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
            // If the current character represents a smaller value than the next character
            // Subtract the value of the current character from the result
            result -= romanToIntMap[s[i]];
        } else {
            // Otherwise, add the value of the current character to the result
            result += romanToIntMap[s[i]];
        }
    }

    return result;
}

// Example
let romanNumeral = "XXVII";
console.log(romanToInt(romanNumeral)); // Output: 27
