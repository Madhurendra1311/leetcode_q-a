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

// Approach 2:
// Two pointers

// say i and j which point to first and last element of array respectively.
// As we know in cyclic rotation we will bring last element to first and shift rest in forward direction,
// so start swaping arr[i] and arr[j] and keep j fixed and i moving towards j.
// Repeat till i is not equal to j


const rotateArray = (arr) => {
    let i = 0;
    let j = arr.length-1;
    while(i != j){
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
    }
    // return arr;
}

let array = [1, 2, 3, 4, 5]
let result = rotate(array);
console.log(result);

