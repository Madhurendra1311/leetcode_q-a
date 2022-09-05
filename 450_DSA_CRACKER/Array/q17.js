// Count pairs with given sum

// link: https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// Approach1:
// Initialize the count variable with 0 which stores the result.
// Iterate arr and if the sum of ith and jth [i + 1…..n – 1] element is equal to sum i.e. arr[i] + arr[j] == sum, then increment the count variable.
// Return the count.


const countPairSum = (arr, k) => {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === k) {
                count++;
            }
        }
    }
    return count;
}

let res = countPairSum([1, 5, 7, 1], 6)
console.log(res);

var maxOperations = function(nums, k) {
    // two pointer
    // 3,1,3,4,3
    nums.sort((a,b) => a-b)
    let i = 0;
    let j = nums.length - 1;
    let count = 0;
    while(i<j) {
        let sum = nums[i]+nums[j]
        if(sum === k) {
            i++;
            j--;
            count++;
        } else if(sum < k) {
            i++;
        }else {
            j--;
        }
    }
    return count;
};

let result = maxOperations([3,1,3,4,3], 6)
console.log(result);

// Time complexity: O(n)
// space complexity: O(1)
