// Kadane's Algorithm : Maximum Subarray Sum in an Array


// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Example 1:
// Input:
//  arr = [-2,1,-3,4,-1,2,1,-5,4] 

// Output:
//  6 

// Explanation:
//  [4,-1,2,1] has the largest sum = 6. 

// Algorithm / Intuition
// Intuition:
// We will check the sum of every possible subarray and consider the maximum among them. To get every possible subarray sum, we will be using three nested loops. The first loops(say i and j) will iterate over every possible starting index and ending index of a subarray. Basically, in each iteration, the subarray range will be from index i to index j. Using another loop we will get the sum of the elements of the subarray [i…..j]. Among all values of the sum calculated, we will consider the maximum one.

// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
// Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
// Note: We are selecting every possible subarray using two nested loops and for each of them, we add all its elements using another loop.

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // subarray = arr[i.....j]
            let sum = 0;

            //add all the elements of subarray:
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }

            maxi = Math.max(maxi, sum);
        }
    }

    return maxi;
}

const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum is: ${maxSum}`);

// Algorithm / Intuition
// Intuition: If we carefully observe, we can notice that to get the sum of the current subarray we just need to add the current element(i.e. arr[j]) to the sum of the previous subarray i.e. arr[i….j-1].

// Assume previous subarray = arr[i……j-1]
// current subarray = arr[i…..j]
// Sum of arr[i….j] = (sum of arr[i….j-1]) + arr[j]

// This is how we can remove the third loop and while moving j pointer, we can calculate the sum.

// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = array size).
// Inside the loop, we will run another loop(say j) that will signify the ending index as well as the current element of the subarray. For every subarray starting from index i, the possible ending index can vary from index i to n-1(n = size of the array).
// Inside loop j, we will add the current element to the sum of the previous subarray i.e. sum = sum + arr[j]. Among all the sums the maximum one will be the answer.

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // current subarray = arr[i.....j]

            //add the current element arr[j]
            // to the sum i.e. sum of arr[i...j-1]
            sum += arr[j];

            maxi = Math.max(maxi, sum); // getting the maximum
        }
    }

    return maxi;
}

let arr2 = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
let n2 = arr.length;
let maxSum2 = maxSubarraySum(arr2, n2);
console.log("The maximum subarray sum is: " + maxSum2);

// Intuition:
// The intuition of the algorithm is not to consider the subarray as a part of the answer if its sum is less than 0. A subarray with a sum less than 0 will always reduce our answer and so this type of subarray cannot be a part of the subarray with maximum sum.

// Here, we will iterate the given array with a single loop and while iterating we will add the elements in a sum variable. Now, if at any point the sum becomes less than 0, we will set the sum as 0 as we are not going to consider any subarray with a negative sum. Among all the sums calculated, we will consider the maximum one.

// Thus we can solve this problem with a single loop.

// Approach:
// The steps are as follows:

// We will run a loop(say i) to iterate the given array.
// Now, while iterating we will add the elements to the sum variable and consider the maximum one.
// If at any point the sum becomes negative we will set the sum to 0 as we are not going to consider it as a part of our answer.
// Note: In some cases, the question might say to consider the sum of the empty subarray while solving this problem. So, in these cases, before returning the answer we will compare the maximum subarray sum calculated with 0(i.e. The sum of an empty subarray is 0). And after that, we will return the maximum one.
// For e.g. if the given array is {-1, -4, -5}, the answer will be 0 instead of -1 in this case. 

// This is applicable to all the approaches discussed above.


function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }
    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

const arr3 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const n3 = arr.length;
const maxSum3 = maxSubarraySum(arr3, n3);
console.log("The maximum subarray sum is: " + maxSum3);