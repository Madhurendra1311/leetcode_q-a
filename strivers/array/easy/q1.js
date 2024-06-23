// Find the Largest element in an array

function sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}
const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];
  
console.log("The Largest element in the array is: " + sortArr(arr1));
console.log("The Largest element in the array is: " + sortArr(arr2));

//method2 recursive approach

// Approach: 
// Create a max variable and initialize it with arr[0].
// Use a for loop and compare it with other elements of the array
// If any element is greater than the max value, update max value with the element’s value
// Print the max variable.

function findLargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }
    
  const array1 = [2, 5, 1, 3, 0];
  let max = findLargestElement(array1);
  console.log("The largest element in the array is: " + max);
  
  const array2 = [8, 10, 5, 7, 9];
  max = findLargestElement(array2);
  console.log("The largest element in the array is: " + max);
  