// Longest Palindrome in a String
// link: https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1

const printString = (s, start, end) => {
    for(let i = start; i <= end; i++) {
        console.log(s[i]);
    }
}

const longestPalindrome = (s) => {
    let start = 0;
    let end = 1;
    let low;
    let high;
    for(let i = 1; i < s.length; i++) {
        // even substring
        low = i - 1;
        high = i;
        while(low >= 0 && high < s.length && s[low] === s[high]) {
            if(high - low + 1 > end) {
                start = low;
                end = high - low + 1;
            }
            low--;
            high++
        }
        // odd substring
        low = i - 1;
        high = i + 1;
        while(low >= 0 && high < s.length && s[low] === s[high]) {
            if(high - low + 1 > end) {
                start = low;
                end = high - low + 1;
            }
            low--;
            high++
        }
    }

    printString(s, start, start+end-1)
}

let res = longestPalindrome("aaaabbaa")
console.log(res);