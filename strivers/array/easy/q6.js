// Rotate array by K elements

// Rotate array by K elements

// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

function rotate(arr, k) {
    let kArr = arr.splice(arr.length - k) 
    arr.unshift(...kArr)
    return arr;
}

let res = rotate([5,4,3,2,1,9], 3)
console.log(res)