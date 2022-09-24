// Palindrome String

// link: https://practice.geeksforgeeks.org/problems/palindrome-string0817/1

const isPalindrome = (s) => {
    // Iterate over the range [0, N/2]
    for (let i = 0; i < s.length / 2; i++) {
 
        // If S[i] is not equal to
        // the S[N-i-1]
        if (s[i] != s[s.length - i - 1]) {
            // Return No
            return "No";
        }
    }
    // Return "Yes"
    return "Yes";
}

let s = isPalindrome("abba")
console.log(s);