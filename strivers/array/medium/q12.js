// Maximum Product Subarray in an Array


// Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

// Example 1:
// Input:

//  Nums = [1,2,3,4,5,0]
// Output:

//  120
// Explanation:

//  In the given array, we can see 1×2×3×4×5 gives maximum product value.

// Example 2:
// Input:
//  Nums = [1,2,-3,0,-4,-5]
// Output:

//  20
// Explanation:

//  In the given array, we can see (-4)×(-5) gives maximum product value.

// Approach:
// Find all possible subarrays of the given array. Find the product of each subarray. Return the maximum of all them.

// Following are the steps for the approach:-

// Run a loop on the array to choose the start point for each subarray.
// Run a nested loop to get the end point for each subarray.
// Multiply elements present in the chosen range

function maxProductSubArray(nums) {
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let prod = 1;
            for (let k = i; k <= j; k++) {
                prod *= nums[k];
            }
            result = Math.max(result, prod);
        }
    }
    return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));
