// Longest Subarray with sum K | [Postives and Negatives]


// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Input Format:
//  N = 3, k = 5, array[] = {2,3,5}
// Result:
//  2
// Explanation:
//  The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format
// : N = 3, k = 1, array[] = {-1, 1, 1}
// Result:
//  3
// Explanation:
//  The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.

// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
// Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from index i, the possible ending index can vary from index i to n-1(n = size of the array).
// After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
// If the sum equals k, we will consider its length i.e. (j-i+1). Among all such subarrays, we will consider the maximum length by comparing all the lengths.


function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        for (let j = i; j < n; j++) { // ending index
            // add all the elements of subarray = a[i...j]
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];   
            }

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a = [-1, 1, 1];
let k = 1;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
