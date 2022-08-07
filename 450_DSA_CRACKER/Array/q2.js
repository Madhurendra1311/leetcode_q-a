// link: https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1

// Find minimum and maximum element in an array

// Approach 1:

const getMinMax = (arr, n) => {
    let max = arr[0];
    let min = arr[0];
    
    for(let i = 1; i < n; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
        else if(arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min }
}

let arr = [5, 7, 2, 4, 9, 6]
let res = getMinMax(arr, 6)
console.log(res);


// Approach 2:

var arr1 = [ 6, 3, 5, 2, 9 ];
 
console.log("Min:", Math.min(...arr1));
console.log("Max:", Math.max(...arr1));

// Approach 3:

let arr2 = [1, 2, 3, 4, 3, 20, 0];
let maxNum = arr2.reduce((prev, current) => {
  return Math.max(prev, current)
});
console.log(maxNum);
