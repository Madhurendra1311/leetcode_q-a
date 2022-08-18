// Minimize the Heights II

// link: https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1

// Approach 1: 

// Sort the array 
// Try to make each height of the tower maximum by decreasing the height of all the towers to the right by k and increasing all the height of the towers to the left by k.
// Check whether the current index tower has the maximum height or not by comparing it with a[n] - k.
// If the tower’s height is greater than the a[n] - k then it’s the tallest tower available.
//     Similarly, find the shortest tower and minimize the difference between these two towers.  

const getMinDiff = (arr, n, k) => {
    arr.sort((a, b) => a - b);
    let ans = arr[n - 1] - arr[0];  // Maximum possible height difference
    let tempMin = arr[0];
    let tempMax = arr[n - 1];

    for(let i = 1; i < n; i++) {
        tempMin= Math.min(arr[0] + k, arr[i] - k);   // Minimum element when we add k to whole array

        tempMax = Math.max(arr[i - 1] + k, arr[n - 1] - k)  // Maximum element when we subtract k from whole array

        ans = Math.min(ans, tempMax - tempMin);
    }
    return ans;
}

let arr = [1, 10, 15]
let n = arr.length;
let k = 6
let res = getMinDiff(arr, n, k)
console.log(res);