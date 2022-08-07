// Reverse an Array

// link: https://practice.geeksforgeeks.org/problems/reverse-an-array/0

// iterative way:

// i) Initialize start and end indexes as start = 0, end = n - 1 
// ii) In a loop, swap arr[start] with arr[end] and change start and end as followes
//     start = start + 1, end = end - 1

// Approach 1:
// Two Pointer Approach

const reverseArray = (arr, start, end) => {
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

// const printArray = (arr, n) => {
//     let resultArray = []
//     for(let i = 0; i < n; i++){
//         resultArray.push(arr[i])
//     }
//     return resultArray;
// }

let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length
let result = reverseArray(arr, 0, n-1);
// let result = printArray(arr, n)
console.log(result);

// Approach 2: 

const reverseArrayString = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        let temp = arr[n-1];
        arr[n-1] = arr[i];
        arr[i] = temp
        n--
    }
    return arr;
}

let arr1 = [1, 8, 3, 7, 5, 6];
let res = reverseArrayString(arr1)
console.log(res);

// Approach 3: 
var reverseArrString = (arr) => {
    let n = arr.length/2
    for(let i = 0; i < n; i++) {
        [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
    }
    return arr;
};

let arr2 = [1, 5, 4, 2, 9];
let res2 = reverseArrString(arr2)
console.log(res2);




