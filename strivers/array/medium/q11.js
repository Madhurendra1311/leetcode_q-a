// Count Subarray sum Equals K


// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input Format:
//  N = 4, array[] = {3, 1, 2, 4}, k = 6
// Result:
//  2
// Explanation:
//  The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

// Example 2:
// Input Format:
//  N = 3, array[] = {1,2,3}, k = 3
// Result:
//  2
// Explanation:
//  The subarrays that sum up to 3 are [1, 2], and [3].

// Algorithm / Intuition
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
// Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
// After calculating the sum, we will check if the sum is equal to the given k. If it is, we will increase the value of the count.

// Intuition: We will check the sum of every possible subarray and count how many of them are equal to k. To get every possible subarray sum, we will be using three nested loops. The first two loops(say i and j) will iterate over every possible starting index and ending index of a subarray. Basically, in each iteration, the subarray range will be from index i to index j. Using another loop we will get the sum of the elements of the subarray [i…..j]. Among all values of the sum calculated, we will only consider those that are equal to k.

// Note: We are selecting every possible subarray using two nested loops and for each of them, we add all its elements using another loop.

// Note: For a better understanding of intuition, please watch the video at the bottom of the page.

function findAllSubarraysWithGivenSum(arr, k) {
    let n = arr.length; // size of the given array.
    let cnt = 0; // Number of subarrays:

    for (let i = 0; i < n; i++) { // starting index i
        for (let j = i; j < n; j++) { // ending index j

            // calculate the sum of subarray [i...j]
            let sum = 0;
            for (let K = i; K <= j; K++)
                sum += arr[K];

            // Increase the count if sum == k:
            if (sum == k)
                cnt++;
        }
    }
    return cnt;
}

let arr = [3, 1, 2, 4];
let k = 6;
let cnt = findAllSubarraysWithGivenSum(arr, k);
console.log(cnt);

// Algorithm / Intuition
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = array size).
// Inside the loop, we will run another loop(say j) that will signify the ending index as well as the current element of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// Inside loop j, we will add the current element to the sum of the previous subarray i.e. sum = sum + arr[j]. 
// After calculating the sum, we will check if the sum is equal to the given k. If it is, we will increase the value of the count.

// Intuition: If we carefully observe, we can notice that to get the sum of the current subarray we just need to add the current element(i.e. arr[j]) to the sum of the previous subarray i.e. arr[i….j-1].

// Assume previous subarray = arr[i……j-1]
// current subarray = arr[i…..j]
// Sum of arr[i….j] = (sum of arr[i….j-1]) + arr[j]

// This is how we can remove the third loop and while moving j pointer, we can calculate the sum.

// Note: For a better understanding of intuition, please watch the video at the bottom of the page.

function findAllSubarraysWithGivenSum(arr, k) {
    let n = arr.length; // size of the given array.
    let cnt = 0; // Number of subarrays:

    for (let i = 0; i < n; i++) { // starting index i
        let sum = 0;
        for (let j = i; j < n; j++) { // ending index j
            // calculate the sum of subarray [i...j]
            // sum of [i..j-1] + arr[j]
            sum += arr[j];

            // Increase the count if sum == k:
            if (sum == k)
                cnt++;
        }
    }
    return cnt;
}


// Approach:
// We can optimize the brute force by making 3 nested iterations to 2 nested iterations

// Following are the steps for the approach:

// Run a loop to find the start of the subarrays.
// Run another nested loop
// Multiply each element and store the maximum value of all the subarray.

function maxProductSubArray(nums) {
    let result = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        let p = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            result = Math.max(result, p);
            p *= nums[j];
        }
        result = Math.max(result, p); // manages (n-1)th term
    }
    return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));