// Array Subset of another array

// link: https://practice.geeksforgeeks.org/problems/array-subset-of-another-array2317/1

// Approach:

// Use two loops: The outer loop picks all the elements of arr2[] one by one. The inner loop linearly searches for the element picked by the outer loop. If all elements are found then return 1, else return 0.

const isSubset = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                break;
            }
            if(j === arr2.length) {
                return false;
            }
        }
    }
    return true;
}

let arr1 = [ 11, 1, 13, 21, 3, 7 ];
let arr2 = [ 11, 3, 7, 1 ];
let res = isSubset(arr1,arr2)
console.log(res);