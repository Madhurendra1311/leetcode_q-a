// Kth Smallest Element in a Sorted Matrix

// link: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

// approach 1

var kthSmallest = function(matrix, k) {
    let res = matrix.flat().sort((a, b)=> a - b);
    return res[k-1];
};

// approach 2

var kthSmallest2 = function(matrix, k) {
    let n = matrix.length
    let arr =[]
    for(let i=0; i<n;i++){
        arr.push(...matrix[i])
    }
    arr.sort(function(a,b){return a-b})
    return arr[k-1]
};

let arr = [[1,5,9],[10,11,13],[12,13,15]]
let res = kthSmallest(arr, 8)
console.log(res);
