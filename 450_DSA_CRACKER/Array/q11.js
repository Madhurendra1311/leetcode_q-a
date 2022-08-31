// Find the Duplicate Number

// link: https://leetcode.com/problems/find-the-duplicate-number/

// method1
const findDuplicate = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[j]
            }
        }
    }
}

let res = findDuplicate([1,3,4,2,2])
console.log(res);

// method2
const findDuplicates = (nums) => {
    nums.sort((a,b) => a -b)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            return nums[i]
        }
    }
}

// method3
const findDuplicatess = (nums) => {
    const obj = {};
    for(let num of nums) {
        if(obj[num] === undefined) {
            obj[num] = 1;
        }else{
            return num
        }
    }
}