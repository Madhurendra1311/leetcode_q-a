// Sort an array of 0s, 1s and 2s


// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space
// Examples
// Input:
//  nums = [2,0,2,1,1,0]
// Output
// : [0,0,1,1,2,2]

// Input:
//  nums = [2,0,1]
// Output:
//  [0,1,2]

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};