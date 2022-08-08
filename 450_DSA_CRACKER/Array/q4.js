// link: https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1


var sortColors = (nums) => {
    let temp;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++ ) {
            if(nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

let res = sortColors([2,0,2,1,1,0])
console.log(res);