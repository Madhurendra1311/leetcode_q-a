// Minimum characters to be added at front to make string palindrome
// link: https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/


const isPalindrome = (string) => {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const makePalindrome = (s) => {
    let count = 0;
    let flag = 0
    while(s.length > 0) {
        // if string becomes palindrome then break
        if(isPalindrome(s)) {
            flag = 1;
            break;
        }
        else{
            count++;
            // erase the last element of the string
            s = s.substring(0, s.length - 1)
            console.log(count);
        }
    }
    // print the number of insertion at front
    if (flag) {
        return count;
    }
}

let s = "BABABAA";
console.log(makePalindrome(s));