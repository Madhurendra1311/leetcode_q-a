// Reverse Words in a String
// Problem Statement: Given a string s, reverse the words of the string.

// Examples:

// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”

function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Reverse the array of words
    words.reverse();

    // Join the reversed array back into a string
    let reversedSentence = words.join(' ');

    return reversedSentence;
}
  
// Test case
let s = "this is an amazing program";
let result = reverseWords(s);
console.log(result); // Output: "program amazing an is this"

// Approach 2:

function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Manually reverse the array of words
    let reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    // Construct the final string from the reversed array
    let reversedSentence = '';
    for (let i = 0; i < reversedWords.length; i++) {
        reversedSentence += reversedWords[i];
        if (i !== reversedWords.length - 1) {
            reversedSentence += ' ';
        }
    }

    return reversedSentence;
}

// Test case
let s1 = "this is an amazing program";
let result1 = reverseWords(s1);
console.log(result1); // Output: "program amazing an is this"

// Approach 3:

function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Manually reverse the array of words
    let reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    // Construct the final string from the reversed array
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Test case
let s3 = "this is an amazing program";
let result3 = reverseWords(s3);
console.log(result); // Output: "program amazing an is this"