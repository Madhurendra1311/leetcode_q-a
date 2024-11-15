// Rearrange Array Elements by Sign


// 49

// 1
// Variety-1

// Problem Statement:

// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// Note: Start the array with positive elements.

// Example 1:

// Input:
// arr[] = {1,2,-4,-5}, N = 4
// Output:
// 1 -4 2 -5

// Explanation: 

// Positive elements = 1,2
// Negative elements = -4,-5
// To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

// Example 2:
// Input:
// arr[] = {1,2,-3,-1,-2,-3}, N = 6
// Output:
// 1 -3 2 -1 3 -2
// Explanation: 

// Positive elements = 1,2,3
// Negative elements = -3,-1,-2
// To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
// Also, -3 should come before -1, and -1 should come before -2.

// Brute Force Method
// Approach:
// In this simple approach, since the number of positive and negative elements are the same, we put positives into an array called “pos” and negatives into an array called “neg”.
// After segregating each of the positive and negative elements, we start putting them alternatively back into array A.
// Since the array must begin with a positive number and the start index is 0, so all the positive numbers would be placed at even indices (2*i) and negatives at the odd indices (2*i+1), where i is the index of the pos or neg array while traversing them simultaneously.
// This approach uses O(N+N/2) of running time due to multiple traversals which we’ll try to optimize in the optimized approach given below.

// Define a function to rearrange an array of integers by sign.
function RearrangebySign(A, n) {

    // Define 2 arrays, one for storing positive 
    // and other for negative elements of the array.
    let pos = [];
    let neg = [];

    // Segregate the array into positives and negatives.
    for (let i = 0; i < n; i++) {

        if (A[i] > 0) {
            pos.push(A[i]);
        } else {
            neg.push(A[i]);
        }
    }

    // Positives on even indices, negatives on odd.
    for (let i = 0; i < n / 2; i++) {
        A[2 * i] = pos[i];
        A[2 * i + 1] = neg[i];
    }

    return A;
}

// Define an array and call the RearrangebySign function.
let A = [1, 2, -4, -5];
let n = A.length;

let ans = RearrangebySign(A, n);

// Print the result.
console.log(ans.join(" "));

// Approach:

// In this optimal approach, we will try to solve the problem in a single pass and try to arrange the array elements in the correct order in that pass only.
// We know that the resultant array must start from a positive element so we initialize the positive index as 0 and negative index as 1 and start traversing the array such that whenever we see the first positive element, it occupies the space at 0 and then posIndex increases by 2 (alternate places).
// Similarly, when we encounter the first negative element, it occupies the position at index 1, and then each time we find a negative number, we put it on the negIndex and it increments by 2.
// When both the negIndex and posIndex exceed the size of the array, we see that the whole array is now rearranged alternatively according to the sign.
// For a better understanding of intuition, please watch the video at the bottom of my page.

function RearrangebySign(A) {

    let n = A.length;

    // Define an array for storing the answer separately.
    let ans = new Array(n).fill(0);

    // Positive elements start from 0 and negative from 1.
    let posIndex = 0, negIndex = 1;
    for (let i = 0; i < n; i++) {

        // Fill negative elements in odd indices and increment by 2.
        if (A[i] < 0) {
            ans[negIndex] = A[i];
            negIndex += 2;
        }

        // Fill positive elements in even indices and increment by 2.
        else {
            ans[posIndex] = A[i];
            posIndex += 2;
        }
    }

    return ans;
}

// Define an array and call the RearrangebySign function.
let A1 = [1, 2, -4, -5];

let ans1 = RearrangebySign(A1);

// Print the result.
console.log(ans1.join(" "));