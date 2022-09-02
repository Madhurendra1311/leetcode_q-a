// Count Inversions

// link: https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

// Approach 1: Brute Force
// A simple approach is to consider every possible pair of the array and check if the pair satisfies the given condition. If true, increment count.

// Algorithm:

// Initialise count = 0.
// Run a loop i from 0 to N and a nested loop j from i + 1 till N.
// If A[i] > A[j], increment count
// Return count.

const inversionCount = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}

let res = inversionCount([2, 4, 1, 3, 5])
console.log(res);