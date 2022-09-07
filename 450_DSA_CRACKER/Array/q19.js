// Alternate positive and negative numbers

// link: https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1

var rearrangeArray = function(nums) {
    var positive_arr=[];
    var negative_arr=[];
    var final_res=[];
    for(var i=0;i<nums.length;i++){
        if(nums[i]>0) {
            positive_arr.push(nums[i]);
        }
        if(nums[i]<0){
            negative_arr.push(nums[i]);
        }
    }
    for(var i=0;i<positive_arr.length;i++){
        final_res.push(positive_arr[i]);
        final_res.push(negative_arr[i]);
    }
    return final_res;
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]));
