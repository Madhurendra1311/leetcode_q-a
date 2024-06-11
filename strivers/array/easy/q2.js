// Find Second Smallest and Second Largest Element in an array

function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
      console.log(-1 + " " + -1); // Edge case when only one element is present in the array
      return;
    }
  
    arr.sort((a, b) => a - b);
    let small = arr[1];
    let large = arr[arr.length - 2];
    console.log("Second smallest is " + small);
    console.log("Second largest is " + large);
}
  
const arr = [1, 2, 4, 6, 7, 5];
getElements(arr);

// Approach2:
// Find the smallest and largest element in the array in a single traversal
// After this, we once again traverse the array and find an element that is just greater than the smallest element we just found.
// Similarly, we would find the largest element which is just smaller than the largest element we just found
// Indeed, this is our second smallest and second largest element.

function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
      console.log(-1 + " " + -1); // Edge case when only one element is present in the array
      return;
    }
  
    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      small = Math.min(small, arr[i]);
      large = Math.max(large, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < second_small && arr[i] !== small)
          second_small = arr[i];
        if (arr[i] > second_large && arr[i] !== large)
          second_large = arr[i];
    }
    
    console.log("Second smallest is " + second_small);
    console.log("Second largest is " + second_large);
}
    
const arr1 = [1, 2, 4, 6, 7, 5];
getElements(arr1);

// Approach3:
// We would require four variables: small,second_small, large, and second_large. Variable small and second_small are initialized to INT_MAX while large and second_large are initialized to INT_MIN.

// Second Smallest Algo:

// If the current element is smaller than ‘small’, then we update second_small and small variables
// Else if the current element is smaller than ‘second_small’ then we update the variable ‘second_small’
// Once we traverse the entire array, we would find the second smallest element in the variable second_small.
// Here’s a quick demonstration of the same.

// Second Largest Algo:

// If the current element is larger than ‘large’ then update second_large and large variables
// Else if the current element is larger than ‘second_large’ then we update the variable second_large.
// Once we traverse the entire array, we would find the second largest element in the variable second_large.
// Here’s a quick demonstration of the same.

function secondSmallest(arr) {
    if (arr.length < 2)
      return -1;
  
    let small = Infinity;
    let second_small = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < small) {
        second_small = small;
        small = arr[i];
      } else if (arr[i] < second_small && arr[i] !== small) {
        second_small = arr[i];
      }
    }
  
    return second_small;
}

function secondLargest(arr) {
    if (arr.length < 2)
      return -1;
  
    let large = -Infinity;
    let second_large = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > large) {
        second_large = large;
        large = arr[i];
      } else if (arr[i] > second_large && arr[i] !== large) {
        second_large = arr[i];
      }
    }
  
    return second_large;
}

const arr2 = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr2);
const sL = secondLargest(arr2);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);

