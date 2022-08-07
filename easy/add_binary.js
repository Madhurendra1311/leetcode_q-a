// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.



// Solution Idea:

// 1) Keep a variable carry.
// 2) Scan the strings from right to left.
// 3) Calculate sum by adding the two bits represented by the characters and add carry to it.
// 4) Take the sum modulo 2 (sum % 2) (because it's binary) and add it in the front of the existing result string.
// 5) Update the carry by taking sum / 2 for the next iteration.
// 6) Check if the value of the carry is more than zero after the last iteration and if exists, add it to the front of the result.


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    // Resultant string
    let result = "";
    // Indices for a and b
    let i = a.length - 1;
    let j = b.length - 1;
    // Carry
    let carry = 0;
    while (i >= 0 || j >= 0) {
        // Sum of two bits
        let sum = carry;
        if (i >= 0) {
            sum += a[i--] - '0';
        }
        if (j >= 0) {
            sum += b[j--] - '0';
        }
        // Add the bit to the result
        result = sum % 2 + result;
        // Modify carry
        carry = parseInt(sum / 2);
    }
    // Final check if carry exists
    if (carry > 0) {
        result = 1 + result;
    }
    return result;
};