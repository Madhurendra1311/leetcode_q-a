// Minimum number of jumps
// link: https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

// Approach:
    // steps: 1
    // no of reach: 1
    // jumps: 1

    // arr:  1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9
    // index:   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

const minJumps = (arr) => {
    let n = arr.length;
    if(n < 1) {
        return 0;
    }
    if(arr[0] === 0) {
        return -1;
    }
    let maxReach = 0;
    let step = arr[0];
    let jump = 1

    for(let i = 1; i < n; i++) {
        if(i === n-1) {
            return jump;
        }
        maxReach = Math.max(maxReach, i+arr[i])
        step--
        if(step === 0) {
            jump++
            if(i >= maxReach) {
                return -1
            }
            step = maxReach - i;
        }
    }
    return -1;
}

let res = minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);
console.log(res);