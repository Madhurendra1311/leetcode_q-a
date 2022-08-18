// Cyclically rotate an array by one

// link: https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0

// Approach 1:
// 1. Store last element in a variable say x. 
// 2. Shift all elements one position ahead. 
// 3. Replace first element of array with x.

const rotate = (arr) => {
    let x = arr[arr.length - 1]
    for(let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = x;
    
    return arr;
}

let arr = [1, 2, 3, 4, 5]
let res = rotate(arr);
console.log(res);