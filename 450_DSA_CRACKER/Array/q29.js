// Smallest Subarray with sum greater than a given value

// link: https://leetcode.com/problems/minimum-size-subarray-sum/submissions/

var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let start = 0;
    let sum  = 0;
    for(let end = 0; end < nums.length; end++){
        sum += nums[end];
        while(sum >= target){
            result = Math.min(result, end-start+1);
            sum -= nums[start];
            start++;
        }
    }
    return result == Infinity ? 0 : result;
};

let res = minSubArrayLen(7, [2,3,1,2,4,3])
console.log(res);