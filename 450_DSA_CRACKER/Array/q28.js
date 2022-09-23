// Chocolate Distribution Problem

// link: https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1

const findMinDiff = (arr, n, m) => {
    let i = 0;
    let j = m - 1;
    let diff = Infinity
    arr.sort((a,b) => a-b)
    while(j < n) {
        diff = Math.min(diff, arr[j] - arr[i]);
        j += 1;
        i += 1;
    }
    return diff;
}


let res = findMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5);
console.log(res);