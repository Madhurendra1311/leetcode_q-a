// Majority Element II

// link: https://leetcode.com/problems/majority-element-ii/

var majorityElement = function(nums) {
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        let count = 0;
        for(let j = 0; j < n; j++) {
            if(nums[i] === nums[j] ) {
                count++;
            }
        }
        if(count > n/3){
            return nums[i]
        }
    }
};

let res = majorityElement([1])
console.log(res);


// Approach2:

var majorityElements = function(nums) {
    let num1 = -1;
    let num2 = -1;
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === num1) {
            count1++;
        }else if(nums[i] === num2) {
            count2++
        }else if(count1 === 0) {
            num1 = nums[i]
            count1 = 1
        }else if(count2 === 0){
            num2 = nums[i]
            count2 = 1
        }else{
            count1--;
            count2--;
        }
    }
    let res=[]
    count1=0
    count2=0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i]==num1){
            count1++
        }
        else if(nums[i]==num2){
            count2++
        }
    }
    
    if(count1>Math.floor(nums.length/3)){
        res.push(num1)
    }
    if(count2>Math.floor(nums.length/3)){
        res.push(num2)
    }
    
    return res
};

let res1 = majorityElements([1])
console.log(res1);


// Approach3:

const majorityElement3 = (nums) => {
    const obj = {};
    const arr = [];
    const count = Math.floor(nums.length/3);
    for (let i=0;i<nums.length;i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
    }
    Object.entries(obj).forEach(e => {
        if(e[1] > count)
            arr.push(e[0])
    })
    return arr
}

let res2 = majorityElement3([1])
console.log(res2);