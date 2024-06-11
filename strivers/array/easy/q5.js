// Left Rotate the Array by One

// Problem Statement: Given an array of N integers, left rotate the array by one place.

// We can take another dummy array of the same length and then shift all elements in the array toward the left and then at the last element store the index of 0th index of the array and print it.


function solve(arr, n) {
    let temp = new Array(n);
    for (let i = 1; i < n; i++) {
        temp[i - 1] = arr[i];
    }
    temp[n - 1] = arr[0];
    for (let i = 0; i < n; i++) {
        console.log(temp[i] + " ");
    }
    console.log();
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
solve(arr, n);

// Approach2

// At first, we have to shift the array towards the left so, we store the value of the first index in a variable (let it be x).

// Then we iterate the array from the 0th index to the n-1th index(why n-1 i will explain it below)

// And then store the value present in the next index to the current index like this :

function solve(arr, n) {
    let temp = arr[0]; // storing the first element of the array in a variable
    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp; // assign the value of the variable at the last index
    for (let i = 0; i < n; i++) {
        console.log(arr[i] + " ");
    }
}

let n1 = 5;

let arr1 = [1, 2, 3, 4, 5];
solve(arr1, n1);