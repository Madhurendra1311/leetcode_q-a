// Merge Intervals

// link: https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let curr = intervals[0];
    let res = []
    
    for(let i = 1; i < intervals.length; i++) {
        if(curr[1] < intervals[i][0]) {
            res.push(curr)
            curr = intervals[i];
        } else {
            curr[1] = Math.max(curr[1], intervals[i][1]);
        }
    }
    res.push(curr)
    return res; 
};

let arr = [[1,3],[2,6],[8,10],[15,18]]
let result = merge(arr)
console.log(result);