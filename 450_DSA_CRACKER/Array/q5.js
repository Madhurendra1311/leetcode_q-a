// link: https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1

// Move all negative elements to end

// Javascript program to Move All -ve Element At End
// Without changing order Of Array Element

const segregateElements = (arr) => {
    // Create an empty array to store result
    let temp = [];
    // Traversal array and store +ve element in
    // temp array
    let j = 0; // index of temp
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            temp[j++] = arr[i];
        }
    }
    if(j === arr.length || j === 0) {
        return ;
    }
    // Store -ve element in temp array
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            temp[j++] = arr[i]
        }
    }
    // console.log("temp", arr);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }

    return arr;
}

let arr= [1 ,-1 ,-3 , -2, 7, 5, 11, 6];
let res = segregateElements(arr); 
console.log(res);

// Approach2: 

const segregateElements1 = (arr) => {
    if(arr.length === 0) {
        return
    }
    // Create an empty array to store result
    let temp = [];
    // Traversal array and store +ve element in
    // temp array
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            temp.push(arr[i]);
        }
    }
    // Store -ve element in temp array
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            temp.push(arr[i])
        }
    }
    // copy the dummy array to the original array
    for(let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }

    return arr;
}

let arr1= [1, -1 ,-3 , -2, 7, 5, 11, 6];
let result = segregateElements1(arr1); 
console.log(result);



// Approach 3:
const swap = (arr, low, high) => {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
}

const segregateElements2 = (arr) => {
    let low = 0;
    let high = arr.length - 1;
    // making high point to the last non-negative integer in the array
    while(arr[high] < 0 && high > low) {
        high--;
    }
    // swap the low integer with high whenever we find a negative integer
    while(low < high){
        if(arr[low] < 0){
            swap(arr[low], arr[high]);
            high--;
        }
        low++;
    }
    return arr;
}

let arr2 = [1, -1 ,-3 , -2, 7, 5, 11, 6];
let results = segregateElements2(arr2); 
console.log(results);

