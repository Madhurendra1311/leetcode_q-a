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

// Better Approach (Using two loops): 
// Approach:

// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = array size).
// Inside the loop, we will run another loop(say j) that will signify the ending index as well as the current element of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// Inside loop j, we will add the current element to the sum of the previous subarray i.e. sum = sum + arr[j]. 
// If the sum is equal to k, we will consider its length i.e. (j-i+1). Among all such subarrays with sum k, we will consider the one with the maximum length by comparing all the lengths.

// Intuition: If we carefully observe, we can notice that to get the sum of the current subarray we just need to add the current element(i.e. arr[j]) to the sum of the previous subarray i.e. arr[i….j-1].

// Assume previous subarray = arr[i……j-1]
// current subarray = arr[i…..j]
// Sum of arr[i….j] = (sum of arr[i….j-1]) + arr[j]

// This is how we can remove the third loop and while moving the j pointer, we can calculate the sum.

// Note: For a better understanding of intuition, please watch the video at the bottom of the page.

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        let s = 0;
        for (let j = i; j < n; j++) { // ending index
            // add the current element to the subarray a[i...j-1]
            s += a[j];

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a1 = [-1, 1, 1];
let k1 = 1;
let len1 = getLongestSubarray(a1, k1);
console.log("The length of the longest subarray is:", len1);

// Optimal Approach (Using Hashing): 
// Approach:
// The steps are as follows:

// First, we will declare a map to store the prefix sums and the indices.
// Then we will run a loop(say i) from index 0 to n-1(n = size of the array).
// For each index i, we will do the following:
// We will add the current element i.e. a[i] to the prefix sum.
// If the sum is equal to k, we should consider the length of the current subarray i.e. i+1. We will compare this length with the existing length and consider the maximum one.
// We will calculate the prefix sum i.e. x-k, of the remaining subarray.
// If that sum of the remaining part i.e. x-k exists in the map, we will calculate the length i.e. i-preSumMap[x-k], and consider the maximum one comparing it with the existing length we have achieved until now.
// If the sum, we got after step 3.1, does not exist in the map we will add that with the current index into the map. We are checking the map before insertion because we want the index to be as minimum as possible and so we will consider the earliest index where the sum x-k has occurred. [Detailed discussion in the edge case section]
// In this approach, we are using the concept of the prefix sum to solve this problem. Here, the prefix sum of a subarray ending at index i, simply means the sum of all the elements of that subarray.

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x-k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // finally, update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

let a2 = [-1, 1, 1];
let k2 = 1;
let len2 = getLongestSubarray(a2, k2);
console.log("The length of the longest subarray is:", len2);