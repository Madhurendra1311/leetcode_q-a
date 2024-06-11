// Count Maximum Consecutive One's in the array


// 80

// 5
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Examples:

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 
// Solution:

// Approach:  We maintain a variable count that keeps a track of the number of consecutive 1’s while traversing the array. The other variable max_count maintains the maximum number of 1’s, in other words, it maintains the answer.

// We start traversing from the beginning of the array. Since we can encounter either a 1 or 0 there can be two situations:-

// If  the value at the current index is equal to 1 we increase the value of count by one. After updating  the count variable if it becomes more than the max_count  update the max_count.
// If the value at the current index is equal to zero we make the variable count as 0 since there are no more consecutive ones.


function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++;
            // maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
}

let nums = [1, 1, 0, 1, 1, 1];
let result = findMaxConsecutiveOnes(nums);
console.log(result); // Output: 3