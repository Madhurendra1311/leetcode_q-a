// Kadane's Algorithm
// Maximum Subarray
// link: https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

// Brute Force Approach
const maximumSubarraySum = (nums) => {
    let maxSum = -Infinity
    for(let i = 0; i < nums.length; i++) {
        let currSum = 0;
        for(let j = i; j <= nums.length-1; j++) {
            currSum += nums[j];
            if(currSum > maxSum) {
                maxSum = currSum;
            }
        }
    }
    return maxSum;
}

let result = maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4])
console.log(result);

// Kadane's Algorithm
const maxSubArray = function(nums) {
    let maxSub = nums[0]
    let curSum = 0
    
    for(let i = 0; i < nums.length; i++) {  //start with 2nd element
        if(curSum < 0) {
            curSum = 0
        }
        curSum += nums[i];
        maxSub = Math.max(maxSub, curSum)
    }
    return maxSub;
};

let res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(res)