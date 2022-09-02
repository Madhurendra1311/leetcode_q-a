// Next Permutation

// link: https://leetcode.com/problems/next-permutation/

// Approach:

// step1: find the first decending number from the end. Store number in index.
// step2: If we don't find the index then there is no permutation possible for the current number. So we return the first permutation. To do that we need to return reversed array.
// Step 3: If we got the index, Then we need to find the second index. Second index is basically the index which has value greater then the first index value from back. Store the second index value.
// Step 4: Swap index and second index value.
// Step 5: reverse all the array items after the index value. We are doing this bacause we need to find the minimum permutation value after the array index.

var nextPermutation = function(nums) {
    const len=nums.length-1;
    //stores the first index and second index for swapping.
    let index;
    let secIndex;
    
    //get the first index
    for(index=len-1;index>=0;index--){
        if(nums[index]<nums[index+1]){
            break;
        }
    }
    //if we don't find first index we don't find second index. we just reverse nums arr.
    //that means if we get [3,2,1] as input then our next permutation is [1,2,3].
    if(index<0){
        nums.reverse();
    }else{
        //find the second index from last.
        //if we find a value from back which is greater than value of index optained.
        for(secIndex=len;secIndex>index;secIndex--){
            if(nums[secIndex]>nums[index]){
                break;
            }
        }
        //swap values of index and secondindex.
        [nums[index],nums[secIndex]]=[nums[secIndex],nums[index]];
        
        //reverse values after the index value till last.
        let low=index+1;
        let high=len;
        while(low<high){
           [ nums[low],nums[high]]=[ nums[high],nums[low]];
            low++;
            high--
        }
    }
    
    
    return nums;
};


let res = nextPermutation([1,2,3]);
console.log(res);


// What if the input array is sorted in decreasing order?
// If the array is sorted in decreasing order, simply sort it in ascending order, since no greater permutation would be possible for such an array.
// What is the approach to solve the Next Permutation problem?
// The idea is to find the longest non-increasing suffix and swap it with the pivot element found. Pivot element is the index where A[i] < A[i + 1]. At last reversing the suffix, gives us the next greater permutation.