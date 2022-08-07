// link: https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1

// Kth smallest element

// Approach 1:

const kthSmallest = (arr, k) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length - k];
}

let arr = [1, 2, 5, 6, 4]
let res = kthSmallest(arr, 3)
console.log(res);