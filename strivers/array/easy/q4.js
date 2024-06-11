// Remove Duplicates in-place from Sorted Array

// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

// Note: Return k after placing the final result in the first k slots of the array.

// Intuition: We have to think of a data structure that does not store duplicate elements. So can we use a Hash set? Yes! We can. As we know HashSet only stores unique elements.

// Approach: 

// Declare a HashSet.
// Run a for loop from starting to the end.
// Put every element of the array in the set.
// Store size of the set in a variable K.
// Now put all elements of the set in the array from the starting of the array.
// Return K.

function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
        arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
    console.log(arr[i]);
}

// Approach2

function removeDuplicates(arr) {
    let res = [...new Set(arr)]
    console.log(res)
}
removeDuplicates(arr)

// Take a variable i as 0;
// Use a for loop by using a variable ‘j’ from 1 to length of the array.
// If arr[j] != arr[i], increase ‘i’ and update arr[i] == arr[j].
//  After completion of the loop return i+1, i.e size of the array of unique elements.

function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

const arr2 = [1, 1, 2, 2, 2, 3, 3];
const k2 = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k2; i++) {
    console.log(arr2[i]);
}
  